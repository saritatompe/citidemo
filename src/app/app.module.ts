// Angular Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { HttpModule } from '@angular/http';
// import material components


// App Components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ApproverDashboardComponent } from './components/approver-dashboard/approver-dashboard.component'
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';

import { HeaderComponent } from './header/header.component';
import { UserAuthComponent } from './user-auth/user-auth.component';

import { AdminLoginViewComponent } from './admin-login-view/admin-login-view.component';

import { UserLoginServiceService } from './services/userlogin-service/user-login-service.service';

import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';

import { AdminAddBankComponent } from './components/admin/admin-addbank/admin-addbank.component';
import { AdminAddUserComponent } from './components/admin/admin-adduser/admin-adduser.component';
// Services

import { DataService } from './services/data/data.service';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: 'login',    component: LoginComponent  },
  { path: 'user',     component: UserDashboardComponent },
  { path: 'approver', component: ApproverDashboardComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin', component: AdminAddUserComponent},
  { path: '' , redirectTo :'/login', pathMatch: 'full'}
 ];

@NgModule({
  exports: [
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    UserAuthComponent,
    AdminLoginViewComponent,
    HeaderComponent,
    ApproverDashboardComponent,
    UserDashboardComponent,
    RegisterComponent,
    AdminAddBankComponent,
    AdminAddUserComponent
  ],
  imports: [
    HttpModule,
    
    BrowserModule,
    NoopAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatInputModule,
    BrowserAnimationsModule,
     MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    UserLoginServiceService, 
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
