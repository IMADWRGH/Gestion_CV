import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./core/auth/auth.guard";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component:HomeComponent},
  {
    path: 'auth',
    loadChildren: () =>
      import(`./all-modules/auth/auth.module`).then(
        (m) => m.AuthModule
      ),
    //canActivate: [AuthenticationGuard],
  },
  {
    path: 'candidat',
    loadChildren: () =>
      import(`./all-modules/candidat/candidat.module`).then(
        (m) => m.CandidatModule
      ),
    canActivate: [AuthGuard]

  },
  {
    path: 'company',
    loadChildren: () =>
      import(`./all-modules/company/company.module`).then(
        (m) => m.CompanyModule
      ),
    canActivate: [AuthGuard]
  },
  {path: '**', redirectTo: '/home'},
  /*
  {path: "thanks",component:ThankYouPageComponent},
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  { path: 'errorpage', component: ErrorpageComponent },
  {path: '**', redirectTo: '/login'}
   */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
