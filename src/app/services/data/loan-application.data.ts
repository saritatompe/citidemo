export class LoanApplication {
 
    name: string;
    email: string;
    ssn: string;
    loanamount: string;
    education: string;
    age: string;
    tenure: string;
    address: string;
    bank: string;

    constructor(values: Object = {}) {
      //Constructor initialization
      Object.assign(this, values);
    }
 
}