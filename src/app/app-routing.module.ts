import { LoginComponent } from "./login/login.component";
import { PocetnaComponent } from "./pocetna/pocetna.component";

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

const routes: Routes = [
    {path: 'prijava', component: LoginComponent},
    {path: '', component: PocetnaComponent},
    {path: '**', component: PocetnaComponent }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }