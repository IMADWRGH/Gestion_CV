import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { UpdateCompanyFormComponent } from './components/update-company-form/update-company-form.component';
import { ListCompanyFormComponent } from './components/list-company-form/list-company-form.component';
import { AddCompanyFormComponent } from './components/add-company-form/add-company-form.component';
import { CompanyComponent } from './company.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    UpdateCompanyFormComponent,
    ListCompanyFormComponent,
    AddCompanyFormComponent,
    CompanyComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    HttpClientModule
  ],
  exports: [
    NavbarComponent
  ],
  bootstrap: [CompanyComponent]

})
export class CompanyModule { }
