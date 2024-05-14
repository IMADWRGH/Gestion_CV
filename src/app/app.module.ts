import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CandidatModule } from "./all-modules/candidat/candidat.module";
import { CompanyModule } from "./all-modules/company/company.module";
import { AuthModule } from "./all-modules/auth/auth.module";
import { LandingPageComponent } from './share/landing-page/landing-page.component';
import { HomeComponent } from './all-modules/home/home.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HomeModule} from "./all-modules/home/home.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingPageComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CandidatModule,
    CompanyModule,
    AuthModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
