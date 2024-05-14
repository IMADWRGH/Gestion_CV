import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddCandidatFormComponent} from "../candidat/components/add-candidat-form/add-candidat-form.component";
import {UpdateCandidatFormComponent} from "../candidat/components/update-candidat-form/update-candidat-form.component";
import {ListCandidatFormComponent} from "../candidat/components/list-candidat-form/list-candidat-form.component";
import {AddCompanyFormComponent} from "./components/add-company-form/add-company-form.component";
import {UpdateCompanyFormComponent} from "./components/update-company-form/update-company-form.component";
import {ListCompanyFormComponent} from "./components/list-company-form/list-company-form.component";

const routes: Routes = [
  { path: 'add', component: AddCompanyFormComponent },//, canActivate: [LoginGuard]
  { path: 'update', component: UpdateCompanyFormComponent },//, canActivate: [LoginGuard]
  { path: 'list', component: ListCompanyFormComponent},// , canActivate: [LoginGuard]
  {path: '**', redirectTo: '/list'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
