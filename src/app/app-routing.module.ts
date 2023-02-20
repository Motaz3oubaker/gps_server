import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { HeaderComponent } from './header/header/header.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
// //http:localhost:4200=> home component.html will be displayed
  {path:"",component:FirstPageComponent},
//   //http:localhost:4200/login=>  login component.html
 {path:"pk.eyJ1IjoibWFoZW5kcmE5MzI5IiwiYSI6ImNrcHpld25pNzBsdGEycG82aTh2NjI0YnAifQ.AD4EUC9iCaDZMT36sNq50w",component:AppComponent},
 {path:"admin",component:LoginComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
