import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'approver-dashboard',
  template:`
    <div *ngIf="role =='approver'">
    <div class="user row">
      <h2 class="col-md-6">Welcome, {{firstname}}</h2>
      <h6 class="col-md-6 text-right logout"><a href="javascript:" (click)="logout()"> Logout</a></h6>
    </div>
    <div class="container">
      <table class="table table-hover table-bordered">
        <thead>
          <tr>
            <th>Loan ID</th>
            <th>Amount Requested</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let application of applications">
            <td><button type="button" class="btn btn-link" data-toggle="modal" data-target="#loanDetails">{{application.Record.UserId}}</button></td>
            <td>{{application.Record.LoanAmount | currency: 'USD' : true : '4.2-2'}}</td>
            <td>
              <div class="buttons"  *ngIf="application.Record.Status == 'Requested'">
                <button (click)="processLoan(application.Key, 'approved')" type="button" class="btn btn-success">Approve <i class="glyphicon glyphicon-ok"></i></button>
                <button (click)="processLoan(application.Key, 'rejected')" type="button" class="btn btn-danger">Reject <i class="glyphicon glyphicon-remove"></i></button>
              </div>
              <span  *ngIf="application.Record.Status != 'Requested'">{{application.Record.Status}}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
    <div *ngIf="role !='approver'">You are not authorized to view this page</div>



    <div class="modal fade" tabindex="-1" role="dialog" id="loanDetails">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Loan Details</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>The details of the loan will appear here.</p>
          </div>
          <div class="modal-footer">
            
          </div>
        </div>
      </div>
    </div>

  `,
  styles: [`
    .approver-dashboard-container {
      width: 80%;
    }
    .user {
      margin-bottom: 50px;
      border-bottom: 1px solid #CCC;
      margin-left: 0;
      margin-right: 0;
    }

    .container {
      width: 80%;
    }
    .logout {
      margin-top: 40px;
    }

  `]
})
export class ApproverDashboardComponent {

  // User's data
  firstname :string = window.localStorage.name;
  role: string;

  // List of applications to be processed
  applications: Array<any>;

  ngOnInit() {
    var userid = window.localStorage.userid;
    this.role = window.localStorage.role ? window.localStorage.role : "";
    this.role = this.role.toLowerCase();
    if(!userid) {
      this.route.navigate(['/login']);
      return;
    }
    this.getAllPendingLoans();
  }
  
  constructor(private ds: DataService, private route: Router) {
    
  }

  /*
   * method: Fetch all pending loans to list, review and process
   */ 
  getAllPendingLoans() {
    var bankId = window.localStorage.bank;
    this.ds.getAllApplications(bankId)
    .subscribe(response => { 
      this.applications = response;  
    });
  }

  /*
   * method: Process the loan by either Approving or Rejecting
   * @param - applicationId<number> : Id of the loan application
   * @param - status<number> : New status of the loan application
   */
  processLoan(applicationId, status) {
    var userid = window.localStorage.userid;
    this.ds.processLoan(applicationId, status )
    .subscribe(response => { 
      this.getAllPendingLoans();
    });
  }

  /*
   * method: Log the user out and navigate to login screen
   */
  logout() {
    window.localStorage.clear();
    this.route.navigate(['/login']);
  }
}
