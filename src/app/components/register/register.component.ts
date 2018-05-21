import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Http, Response ,RequestOptions,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import * as config from '../../services/config.service';
import { Router } from '@angular/router';
import { DataService } from '../../services/data/data.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

@Injectable()
export class RegisterComponent implements OnInit {
 firstname="";
 lastname="";
 role="";
 password="";
  
  constructor(private http:Http) {

  }
  user = {};
  addUser(user) {
    let body = user;

    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(config.API_ROOT+'registerUser',body)
            .subscribe(user => this.user = user);
   }

  ngOnInit() {
   
  }

}
