import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatRoutingModule } from './candidat-routing.module';
import { AddCandidatFormComponent } from './components/add-candidat-form/add-candidat-form.component';
import { ListCandidatFormComponent } from './components/list-candidat-form/list-candidat-form.component';
import { UpdateCandidatFormComponent } from './components/update-candidat-form/update-candidat-form.component';
import { CandidatComponent } from './candidat.component';
import {AuthComponent} from "../auth/auth.component";


@NgModule({
  declarations: [
    AddCandidatFormComponent,
    ListCandidatFormComponent,
    UpdateCandidatFormComponent,
    CandidatComponent
  ],
  imports: [
    CommonModule,
    CandidatRoutingModule
  ],
  bootstrap: [CandidatComponent]
})
export class CandidatModule { }
