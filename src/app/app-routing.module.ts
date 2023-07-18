import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './Components/admin-page/admin-page.component';
import { ContentComponent } from './Components/content/content.component';
import { SignInComponent } from './Components/sign-in/sign-in.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { StudPageComponent } from './Components/stud-page/stud-page.component';
import { StudentInfoComponent } from './Components/student-info/student-info.component';


const routes: Routes = [
  { path: "",title: 'iBook', component: ContentComponent },
  // { path: '**',title: 'iBook', component: ContentComponent},
  { path: "Signin",title: 'Sign in', component: SignInComponent },
  { path: "Signup",title: 'Sign Up', component: SignUpComponent },
  { path: "booksArena",title: 'iBook', component: ContentComponent },
  {
    path: "AdminComp",title: 'Admin Tool', component: AdminPageComponent, children:
      [{
        path: "Studinfo",title: 'StudInfo', component: StudentInfoComponent
      }]
  },
  { path: "StudComp",title: 'Student iBookpage', component: StudPageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
