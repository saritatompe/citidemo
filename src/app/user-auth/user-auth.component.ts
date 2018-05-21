import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data/data.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent {
  ngOnInit() {
  }
  options: FormGroup;
  error: boolean = false;
  errorMessage = "";

  constructor(fb: FormBuilder,private ds: DataService, private route: Router) {
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
  }

  getUser(username :string, password:string){
    this.error = false;

    this.ds.authenticate(username, password)
    .subscribe(userDetail => {
      console.log(userDetail)
      if(userDetail && userDetail.userRole) {
        if(userDetail.userRole.toLowerCase() == 'user') {
          this.route.navigate(['user']);
        }
        if(userDetail.userRole.toLowerCase() == 'approver') {
          this.route.navigate(['approver']);
        }
      } else {
        this.error = true;
        this.errorMessage = "Incorrect credentials";
      }
    });
  }
}

