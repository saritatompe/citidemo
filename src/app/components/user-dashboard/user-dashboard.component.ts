import { Component, OnInit, ViewChild } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { FormBuilder, FormGroup} from '@angular/forms';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import 'rxjs/add/operator/map';
import { DataService } from '../../services/data/data.service';
import { Router } from '@angular/router';
import * as config from '../../services/config.service';
import { LoanApplication } from '../../services/data/loan-application.data'
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})

export class UserDashboardComponent implements OnInit {
  
  // List of all loan applications
  applications: Array<any> = []

  loanApplication: LoanApplication;

  // User's data
  username :string = window.localStorage.name;
  role  :string = window.localStorage.role;
  userid;

  // Loan data
  loan_amount :number
  loan_status = "";
  
  // Form data
  isFormValid : boolean =true;
  userLoanObject = [];

  constructor(private ds:DataService, private route: Router ){
    this.loanApplication = new LoanApplication();
  }

  ngOnInit() {
    this.userid = window.localStorage.userid;
    if(!this.userid) {
      this.route.navigate(['/login']);
      return;
    }
    this.isFormValid = true;
    //this.getUserData();
  }

  /*
   * method: Submit the loan application
   */ 
  submitLoan(){
    var userid = window.localStorage.userid;
    this.ds.applyLoan(userid, this.loan_amount )
    .subscribe(response => { 
      this.getUserData()
    });
  }

  /*
   * method: Get the list of applications of 
   *          logged in user
   */ 
  getUserData() {
    var userid = window.localStorage.userid;
    this.ds.getApplicationStatus(userid)
    .subscribe(response => { 
      this.applications = response; 
    });
  }

  /*
   * method: Log the user out and navigate to login screen
   */ 
  logout() {
    window.localStorage.clear();
    this.route.navigate(['/login']);
  }

  onSubmit() {
    var userid = window.localStorage.userid;

    this.ds.applyLoan(userid, this.loanApplication).subscribe(res => {
      alert("Applied successfully");
      
    });
  }
}
