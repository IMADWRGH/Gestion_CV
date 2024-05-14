import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeListComponent } from './home-list/home-list.component';
import { HomeSearchComponent } from './components/home-search/home-search.component';


@NgModule({
  declarations: [
    HomeListComponent,
    HomeSearchComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
