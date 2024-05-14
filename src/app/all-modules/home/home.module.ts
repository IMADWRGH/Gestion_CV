import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import {HomeSearchComponent} from "./components/home-search/home-search.component";
import {HomeListComponent} from "./components/home-list/home-list.component";
import {HomeComponent} from "./home.component";
import {CandidatComponent} from "../candidat/candidat.component";


@NgModule({
  declarations: [
    HomeSearchComponent,
    HomeListComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  bootstrap: [CandidatComponent]
})
export class HomeModule { }
