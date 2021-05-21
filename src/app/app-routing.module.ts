import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes, {initialNavigation: 'disabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
