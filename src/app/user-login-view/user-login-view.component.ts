import { Component, OnInit } from '@angular/core';
import { UserLoginServiceService} from '../services/userlogin-service/user-login-service.service';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-user-login-view',
  templateUrl: './user-login-view.component.html',
  styleUrls: ['./user-login-view.component.css']
})
export class UserLoginViewComponent implements OnInit {
  firstname :string = "";
  lastname  :string = "";

  loan_amount :number
  loan_status = "";
  
  isFormValid : boolean =true;
  userLoanObject = [];

  constructor(private us:UserLoginServiceService){
  }

  ngOnInit() {
    this.isFormValid = true;
  }

  submitLoan(firstname,lastname,loan_amount){
      this.isFormValid = false;
      this.loan_status = "Pending"
      console.log(this.firstname,this.lastname,this.loan_amount);   
      this.us.sendLoanDetails(firstname,lastname,loan_amount).subscribe(userLoanObject =>console.log(userLoanObject) );
  }
}
