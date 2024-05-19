import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeSearchComponent } from './components/home-search/home-search.component';
import { HomeListComponent } from './components/home-list/home-list.component';
import { HomeComponent } from './home.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    HomeSearchComponent,
    HomeListComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
