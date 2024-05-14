import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CandidatModule } from "./all-modules/candidat/candidat.module";
import { CompanyModule } from "./all-modules/company/company.module";
import { AuthModule } from "./all-modules/auth/auth.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CandidatModule,
    CompanyModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
