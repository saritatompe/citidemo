import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'approver-dashboard',
  template:`
  
    <div class="adduser-header">
        <h4 class="text-primary">Add User</h4>
    </div>
    <mat-accordion>
        <mat-expansion-panel>
            <mat-expansion-panel-header>
                <mat-panel-title>
                    Add Bank Employee
                </mat-panel-title>
            </mat-expansion-panel-header>
            <div class="row">
                <div class=" col-sm-3">
                    <mat-form-field>
                        <input matInput placeholder="Employee Name" [(ngModel)]="empname" ngDefaultControl>
                    </mat-form-field>
                </div>
                <div class=" col-sm-3">
                    <mat-form-field>
                        <input matInput placeholder="Email id" [(ngModel)]="empemail" ngDefaultControl>
                    </mat-form-field>
                </div>
                <div class=" col-sm-3">
                    <button mat-button [(ngModel)]="bankselected" ngDefaultControl [matMenuTriggerFor]="menu">Select Bank</button>
                    <mat-menu #menu="matMenu">
                        <button mat-menu-item>Item 1</button>
                        <button mat-menu-item>Item 2</button>
                    </mat-menu>
                </div>
            </div>
            <mat-action-row>
                <button mat-raised-button color="primary" (click)="submitBankEmp()" >Submit</button>
            </mat-action-row>   
        </mat-expansion-panel>

        <mat-expansion-panel (opened)="panelOpenState = true" (closed)="panelOpenState = false">
            <mat-expansion-panel-header>
                <mat-panel-title>
                    Add a Dealer
                </mat-panel-title>
            </mat-expansion-panel-header>
            <div class="row">
                <div class=" col-sm-4">
                    <mat-form-field>
                        <input matInput placeholder="Employee Name" [(ngModel)]="dealerempname" ngDefaultControl>
                    </mat-form-field>
                </div>
                <div class=" col-sm-4">
                    <mat-form-field>
                        <input matInput placeholder="Email id" [(ngModel)]="dealerempemail" ngDefaultControl>
                    </mat-form-field>
                </div>
            </div>
            <mat-action-row>
                <button mat-raised-button color="primary">Submit</button>
            </mat-action-row>
        </mat-expansion-panel>
    </mat-accordion>
 `,
  styles: [`    

    .mat-expansion-panel{
    background :   #fff;
    
    }
    container {
    margin-top: 100px;
    width: 30%;
    padding: 40px;
    border: 1px solid #CCC;
    border-radius: 10px;
    }
    .example-headers-align .mat-expansion-panel-header-title, 
    .example-headers-align .mat-expansion-panel-header-description {
    flex-basis: 0;
    }

    .example-headers-align .mat-expansion-panel-header-description {
    justify-content: space-between;
    align-items: center;
    }
    .adduser-header {
        margin-bottom: 40px;
        text-align: center;
    }

  `]
})
export class AdminAddUserComponent {
 
  panelOpenState: boolean = false;
  empname:string;
  empemail :string;
  bankselected;
  dealerempname :string;
  dealerempemail :string;

  submitBankEmp(){
      console.log(this.empname,this.empemail,this.bankselected)
  }
}
