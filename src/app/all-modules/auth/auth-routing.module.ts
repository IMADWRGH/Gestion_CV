import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignInComponent} from "./components/sign-in/sign-in.component";
import {SignUpComponent} from "./components/sign-up/sign-up.component";
import {UserFormComponent} from "./components/user-form/user-form.component";
import {AuthComponent} from "./auth.component";

const routes: Routes = [
  {path: '', component: AuthComponent,
  children:[
    { path: 'signin', component: SignInComponent },//, canActivate: [LoginGuard]
    { path: 'profile', component: SignUpComponent},// , canActivate: [LoginGuard]
    { path: 'user', component: UserFormComponent},// , canActivate: [LoginGuard]
    {path: '**', redirectTo: 'user'}
  ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
