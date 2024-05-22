import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AuthComponent } from './auth.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { UserFormComponent } from './components/user-form/user-form.component';
import { MultiStepRegistrationComponent } from './components/multi-step-registration/multi-step-registration.component';


@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    AuthComponent,
    UserFormComponent,
    MultiStepRegistrationComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
bootstrap: [AuthComponent]
})
export class AuthModule { }
