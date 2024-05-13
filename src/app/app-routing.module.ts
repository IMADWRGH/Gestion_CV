import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: '**', redirectTo: '/home'},
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

  },
  {
    path: 'company',
    loadChildren: () =>
      import(`./all-modules/company/company.module`).then(
        (m) => m.CompanyModule
      ),

  },
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
