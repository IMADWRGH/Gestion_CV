import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeDetailsComponent } from './components/home-details/home-details.component';
import { HomeListComponent } from './components/home-list/home-list.component';

const routes: Routes = [
  { path: "jobs-details", component: HomeDetailsComponent },
  { path: "jobs-list", component: HomeListComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", redirectTo: "/landing-page", pathMatch: "full" },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
