import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../services/data/data.service';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  ngOnInit() {
  }
  options: FormGroup;
  error: boolean = false;
  errorMessage = "";

  username = "";
  password = "";

  constructor(fb: FormBuilder,private ds: DataService, private route: Router) {
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
  }

  /*
   * method: Validate the login form and send the details
   *          to data service to further authenticate the user
   */ 
  getUser(){
    if(this.username == "" || this.password == "") {
      this.error = true;
      this.errorMessage = "Please fill the required details";
      return;
    }
    this.error = false;

    this.ds.authenticate(this.username, this.password)
    .subscribe(userDetail => {

      if(userDetail && userDetail.role) {

        // Store the user details in local storage to use
        // throught the application
        window.localStorage.userid = userDetail.id;
        window.localStorage.name = userDetail.firstname;
        window.localStorage.role = userDetail.role;
        window.localStorage.bank = userDetail.bank;

        // Navigate the user to the user's dashboard
        if(userDetail.role.toLowerCase() == 'user') {
          this.route.navigate(['user']);
        }

        // Navigate the user to the Bank's dashboard
        // in case the user's role is an approver
        if(userDetail.role.toLowerCase() == 'approver') {
          this.route.navigate(['approver']);
        }
      } else {
        this.error = true;
        this.errorMessage = "Incorrect credentials";
      }
    });
  }
}

