import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { UpdateCompanyFormComponent } from './components/update-company-form/update-company-form.component';
import { ListCompanyFormComponent } from './components/list-company-form/list-company-form.component';
import { AddCompanyFormComponent } from './components/add-company-form/add-company-form.component';
import { CompanyComponent } from './company.component';


@NgModule({
  declarations: [
    UpdateCompanyFormComponent,
    ListCompanyFormComponent,
    AddCompanyFormComponent,
    CompanyComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule
  ],
  bootstrap: [CompanyComponent]

})
export class CompanyModule { }
