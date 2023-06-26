import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LibSerService } from 'src/app/Service/lib-ser.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent {
  constructor(private router: Router, private LocalLib: LibSerService) { 
    LocalLib.Currentprofile="Signin"
  }


  // Adding new credentials to the server.
  AddCredential(Uname: any, Pword: any, email: any, Rpwd: any,Reg_Id:any) {
    if (Uname != "" && Pword != "" && email != "" && Rpwd != 0 && Reg_Id!=0) {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)[\w\W]{8,16}$/.test(Pword)) {
          if (String(Pword).match(String(Rpwd))) {
            // Calling a method which post  credentials to the server.
            this.Upload(Uname, Pword,email,Reg_Id)
          } else alert("Both passwords aren't matching")
        } else alert("Password should contain atleast one special charcter,Uppercase,Lowercase,Number and Length should be morethen 8 Charcter")
      } else alert("Provide valid mail id")
    }
    else alert("Fill all the fields")

  }


  data: any //Temp variable
  // Method, which pose Credential to the server.
  Upload(uName: any, Pass: any,email:any,Reg_Id:any) {
    this.data = {  Username:String(uName),password:String(Pass) }
    // Calling a service.
    this.LocalLib.postCredentials(this.data,email,Reg_Id)
    alert("Account created! Kindly sign in to continue")
    // Redirecting our web page to the signing page to sign in
    this.router.navigate(['./Signin']);
  }
  // CheckPassword(pass: any) {
  // }
}
