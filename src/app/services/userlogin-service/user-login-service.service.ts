import { Injectable } from '@angular/core';
import { Http, Response, Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import 'rxjs/Rx' ;
import {API_ROOT} from '../config.service';

@Injectable()
export class UserLoginServiceService {

  constructor(private http:Http) { }
 
  sendLoanDetails(firstname,lastname,loan_amount){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    let body = {
      firstName: firstname,
      lastName: lastname,
      loanAmount: loan_amount
    }
    return this.http.post(API_ROOT+'requestForApproval',body,options)
    .map((res:Response) => res.json());
  
   }
}
