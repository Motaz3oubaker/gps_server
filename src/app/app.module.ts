import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';

import { AppRoutingModule } from './app-routing.module';
import { MainAppComponent } from './Main/main-app/main-app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { FirstPageComponent } from './first-page/first-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainAppComponent,
    LoginComponent,
    FirstPageComponent,
  
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  
  ],
  providers: [],
  bootstrap: [MainAppComponent]
})
export class AppModule { }
