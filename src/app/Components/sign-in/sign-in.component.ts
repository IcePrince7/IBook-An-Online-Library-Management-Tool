import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LibSerService } from 'src/app/Service/lib-ser.service';
 
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent {

  ngOnInit() { }
  // Variable to hold all the credential.
  LocalCredential:any
  // Constructor with subscribing to get all the credential from the server.
  constructor(private LocalLib:LibSerService,private router:Router ) { 
      this.LocalCredential=LocalLib.getCredentials().subscribe(x=>this.LocalCredential=x)
  }


  flag = false
  Checkcretial(Uname: any, pword: any) {
    this.flag = false
    for (let iterator in this.LocalCredential) {
      if (this.LocalCredential[iterator].Username== Uname) {
        if (this.LocalCredential[iterator].Username == Uname && this.LocalCredential[iterator].password == pword) {
          this.flag = true
          break
        } 
      }
    }

    if (this.flag) {
      if (String(Uname) == 'Admin') {
        this.LocalLib.Currentprofile = Uname
        this.router.navigate(['./AdminComp']);
      }
      else {
        this.LocalLib.Currentprofile = Uname
        this.router.navigate(['./StudComp']);
      }
    }

    // Advice to create new credential if inputed credential is new.
    else {
      alert("Creditial is New. Create account to Continue!")
      this.router.navigate(['./Signup']);
    }
  }

}
