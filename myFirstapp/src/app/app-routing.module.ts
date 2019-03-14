import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HelpComponent } from './help/help.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
      },
  {
    path:"help",
    component: HelpComponent
  },
  {
    path:"",// direciona automaticamente para o home
    redirectTo: "/home",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
