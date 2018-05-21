import { Injectable } from '@angular/core';
import { Http, Response, Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import 'rxjs/Rx' ;
import * as config from '../config.service';


@Injectable()
export class DataService {

  constructor(private http:Http) { }


  /*
   * method: Autheticate the User
   * @param - username<string> : Username of the user to be logged in
   * @param - password<string> : Password of the user to be logged in
   */ 
  authenticate(username: string, password: string){
    var body    = { userName : username, password : password };

    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });

    return this.http.post('http://10.20.14.150:4000/login', body, options)
    .map((res:Response) => res.json());
  }


  /*
   * method: Get Status of the applications of a particular user
   * @param - userId<number> : UserId of the user whose status of
   *          the applications needs to be fetched
   */ 
  getApplicationStatus(userId) {
    return this.http.get(config.API_ROOT + 'getUserData?userid=' + userId)
    .map((res:Response) => res.json());
  }


  /*
   * method: Apply for a Loan
   * @param - userId<number> : UserId of the user who is applying
   * @param - loanAmount<number> : Amount of loan required by the user
   */ 
  applyLoan(userId, l) {
    debugger
    var body    = { "fcn" : "createLoanRequest", "args" : [new Date().getTime() + "", l.name, l.ssn, l.loanamount, l.education, "" +l.age, l.tenure, l.address, l.bank, 'Requested','NA','dealer123'] };
                                                           // "args":["L001",      "Tom",      "23456","11000000","BE","21","10","New York","bank123","Requested","bad","dealer123"]
  
var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', config.BEARER_TOKEN)
    
    let options = new RequestOptions({ headers: headers });

    return this.http.post(config.API_ROOT , body, options)
    .map((res:Response) => {
      res.json()
      console.log(res);
    });


    /*var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', config.BEARER_TOKEN)
    let options = new RequestOptions({ headers: headers });
console.log(body, options)
try{
  return this.http.post(config.API_ROOT, body, options)
    .map((res:Response) => res.json());
  } catch(e) {
    console.log("error -> ",e)
  }*/
    
  }


  /*
   * method: Process the loan by either Approving of Rejecting
   * @param - loanId<number> : LoanId of the loan application
   * @param - status<status> : New status of the application
   */ 
  processLoan(loanId, status){
    var body    = { "fcn" : "updateLoanStatus", "args" : [loanId, status] };
    
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', config.BEARER_TOKEN)
    
    let options = new RequestOptions({ headers: headers });

    return this.http.post(config.API_ROOT , body, options)
    .map((res:Response) => res.json());
  }


  /*
   * method: List all application for the processor to Approve / Reject
   */ 
  getAllApplications(bankId) {
    var body    = { "fcn" : "getLoanOfUser", "args" : ["2"] };

    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', config.BEARER_TOKEN)
    let options = new RequestOptions({ headers: headers });

    return this.http.get(config.API_ROOT + "?fcn=queryLoanByBank&args=['" + bankId +"']", options)
    .map((res:Response) => res.json());  
  }  
}
