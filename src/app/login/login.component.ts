import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header/header.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  pass: string ='';

submit(){
  if (this.pass==="admin123"){
   this.router.navigate(["pk.eyJ1IjoibWFoZW5kcmE5MzI5IiwiYSI6ImNrcHpld25pNzBsdGEycG82aTh2NjI0YnAifQ.AD4EUC9iCaDZMT36sNq50w"])
  }else{
    alert('Unauthorized Access')
  }
 
}
}
