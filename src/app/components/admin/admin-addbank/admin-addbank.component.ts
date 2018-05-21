import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'approver-dashboard',
  template:`
  <div class="container">
    <div class="login-header">
      <h4 class="text-primary">Add Bank</h4>
    </div>
    <form>
      <div class="form-group">
        <label for="bankname">Bank Name:</label>
        <input [(ngModel)]="bankname" type="text" class="form-control" id="bankname" placeholder="bankname" name="bankname">
      </div>
      <div class="form-group">
        <label for="bankid">Bank Id:</label>
        <input [(ngModel)]="bankid" type="text" class="form-control" id="bankid" placeholder="bankid" name="bankid">
      </div>
      <div *ngIf="error">
        <div class="text-danger">{{errorMessage}}</div>
      </div>
      <div class="button-container">
        <button (click)="addBank()" class="btn btn-info text-center">Add Bank</button>
      
      </div>
    </form>
  </div>

 `,
  styles: [`
 
  .mat-expansion-panel{
    background : #000  
  }


  `]
})
export class AdminAddBankComponent {
  bankname:'';
  bankid:'';
  addBank(){
    console.log(this.bankname +"  " + this.bankid)
  }
  //panelOpenState: boolean = false;
}
