import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RegisterPirveliComponent } from './main-page/register-pirveli/register-pirveli.component';
import { RegisterMeoreComponent } from './main-page/register-meore/register-meore.component';
import { RegisterMesameComponent } from './main-page/register-mesame/register-mesame.component';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    RegisterPirveliComponent,
    RegisterMeoreComponent,
    RegisterMesameComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
