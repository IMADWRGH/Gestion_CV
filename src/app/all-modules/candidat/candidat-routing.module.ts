import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddCandidatFormComponent} from "./components/add-candidat-form/add-candidat-form.component";
import {UpdateCandidatFormComponent} from "./components/update-candidat-form/update-candidat-form.component";
import {ListCandidatFormComponent} from "./components/list-candidat-form/list-candidat-form.component";

const routes: Routes = [
  { path: 'add', component: AddCandidatFormComponent },//, canActivate: [LoginGuard]
  { path: 'update', component: UpdateCandidatFormComponent },//, canActivate: [LoginGuard]
  { path: 'list', component: ListCandidatFormComponent},// , canActivate: [LoginGuard]
  {path: '**', redirectTo: '/list'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidatRoutingModule { }
