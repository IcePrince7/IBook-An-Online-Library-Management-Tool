import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './Components/content/content.component';
import { SignInComponent } from './Components/sign-in/sign-in.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
// import { CredentialService } from './Service/credential.service';
// import { AdminDataService } from './Service/Admin-data.service';
import { HttpClientModule } from '@angular/common/http';
import { AdminPageComponent } from './Components/admin-page/admin-page.component';
import { StudentInfoComponent } from './Components/student-info/student-info.component';
// import { StudentprofileService } from './Service/studentprofile.service';
import { StudPageComponent } from './Components/stud-page/stud-page.component';
// import { NewBookService } from './Service/new-book.service';
import { LibSerService } from './Service/lib-ser.service';


@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    SignInComponent,
    SignUpComponent,
    AdminPageComponent,
    StudentInfoComponent,
    StudPageComponent
  
  ],
  entryComponents:[
    StudentInfoComponent
  ]
  ,
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
 
 
  ],
  providers: [LibSerService,StudentInfoComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
