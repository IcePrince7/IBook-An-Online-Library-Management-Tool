import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  // Component for homepage.
  constructor(private router: Router){}
  SigninProcess(){
    this.router.navigate(['./Signin']);
  }
  SignupProcess(){
    this.router.navigate(['./Signup']);
  }
}