import { Component, DoCheck, OnInit ,Injector} from '@angular/core';
import { Router } from '@angular/router';
import { LibSerService } from 'src/app/Service/lib-ser.service';
import { StudentInfoComponent } from '../student-info/student-info.component';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css'],

})

export class AdminPageComponent implements OnInit {
  loggedas: any
  ngOnInit(): void {  this.loggedas = this.localLib.CurrentprofileA}

  // To hold admin page data.
  data: any
  // To hold admin recorded book for approval data.
  localRequestdata: any
  // To hold a student page data.
  localStudProData: any

  // Constructor with subscribing server by injecting it
  constructor(private localLib: LibSerService, private router: Router, private inject :Injector){
    this.data = this.localLib.getAdminData().subscribe(x => this.data = x)
     this.localRequestdata = localLib.getreturnReq().subscribe(x => this.localRequestdata = x)
    this.localStudProData = localLib.getStudprofData().subscribe(x => this.localStudProData = x)
  }

  // Variables to manipulate the HTML.
  DetailState: any
  DetailsState = false
  returnState = false
  StudentInfoCompoSignal =false

  // For viewing all records.
  Details() {
    this.StudentInfoCompoSignal=false
    this.returnState = false
    this.DetailsState = true
  }

  // For seeing the request waiting for approval
  Requests() {
    // this.localRequestdata = this.localLib.getreturnReq().subscribe( (x:any) => this.localRequestdata = x)
    this.StudentInfoCompoSignal=false
    this.returnState = true
    this.DetailsState = false
    console.log(this.localRequestdata);
  }


  localVAr: any  // Temporary variable

  // To update the records when admin approved the requests Both at admin info and the student info
  aproveBook(ApprovedName: any) {
    console.log("Process for : " + ApprovedName);
    if (confirm("Are you Sure! You are Approving " + ApprovedName)) {
      console.log("The data is : " + typeof this.data);
      for (let key in this.data) {
        if (this.data[key].Username == ApprovedName) {
          console.log("match" + (parseInt(key) + 1) + " Data" + this.data[key].Username);
          this.localLib.putforUpdatingBook(this.data[key],(parseInt(key) + 1))
        }
      }
      for (let key in this.localRequestdata) {
        if (this.localRequestdata[key].name == ApprovedName) {
          this.localLib.updateRequestData((parseInt(key) + 1))
        }
      }
      for (let key in this.localStudProData) {
        if (this.localStudProData[key].name == ApprovedName) {
          // console.log("match" + (parseInt(key) + 1)+" Data" + this.data[key].Username);
          this.localLib.updateStudProfData( this.localStudProData[key],(parseInt(key) + 1))
        }
      }
    }
  }

  LoadCom :any 
 
  Usernamecall(val: any) {
    this.StudentInfoCompoSignal=true
    this.LoadCom= StudentInfoComponent
    this.localLib.studInfostandsAt =val
    // this.inject.get(StudentInfoComponent).setChild(val)
    // console.log(val);
    // this.router.navigate(["./AdminComp/Studinfo"], { queryParams: { data: val } })
  }
  back() {
    this.router.navigate(["./Signin"])
    this.localLib.Currentprofile = "Signin"
  }

}
