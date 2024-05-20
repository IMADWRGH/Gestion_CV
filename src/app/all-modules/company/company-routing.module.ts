import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCompanyFormComponent } from "./components/add-company-form/add-company-form.component";
import { UpdateCompanyFormComponent } from "./components/update-company-form/update-company-form.component";
import { ListCompanyFormComponent } from "./components/list-company-form/list-company-form.component";
import { CompanyComponent } from './company.component';

const routes: Routes = [
  { path: 'add', component: AddCompanyFormComponent },//, canActivate: [LoginGuard]
  { path: 'update', component: UpdateCompanyFormComponent },//, canActivate: [LoginGuard]
  { path: 'companies', component: ListCompanyFormComponent },// , canActivate: [LoginGuard]
  //{ path: 'companies', component: CompanyComponent },
  { path: '**', redirectTo: '/companies' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
