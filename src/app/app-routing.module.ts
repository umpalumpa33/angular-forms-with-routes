import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterPirveliComponent } from './main-page/register-pirveli/register-pirveli.component';
import { RegisterMeoreComponent } from './main-page/register-meore/register-meore.component';
import { RegisterMesameComponent } from './main-page/register-mesame/register-mesame.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  {
    path: 'main-page',
    component: MainPageComponent,
    children: [
      { path: 'register-first', component: RegisterPirveliComponent },
      { path: 'register-second', component: RegisterMeoreComponent },
      { path: 'register-third', component: RegisterMesameComponent },
    ]
  },
  { 
    path: '', 
    redirectTo: '/main-page',
    pathMatch: 'full', 
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
