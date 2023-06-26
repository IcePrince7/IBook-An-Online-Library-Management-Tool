import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibSerService } from './Service/lib-ser.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'AngBoot';
  

  constructor(private router:Router ,private localLib:LibSerService){}
  loggedAs:any
  ngOnInit(): void {
    this.loggedAs= this.localLib.Currentprofile
  }

  
  SigninProcess(){
    this.router.navigate(['./Signin']);
  }
  SignupProcess(){
    this.router.navigate(['./Signup']);
}
serv(){

}
}


