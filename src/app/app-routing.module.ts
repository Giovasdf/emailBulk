import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainMenuComponent } from './main-menu/main-menu.component';

import { AddClientComponent } from './forms/add-client/add-client.component';
const routes: Routes = [
  { path: '', component: MainMenuComponent, pathMatch: 'full' },
  { path: 'add-client', component: AddClientComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
