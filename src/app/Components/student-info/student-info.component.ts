import { AfterContentChecked, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LibSerService } from 'src/app/Service/lib-ser.service';
// import { StudentprofileService } from 'src/app/Service/studentprofile.service';


@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css'],

})
export class StudentInfoComponent  {


  studProfData: any 
  =this.localLib.getStudprofData().subscribe(x => this.studProfData = x)
  constructor(private localLib:LibSerService,  private router: Router){
    console.log(this.studProfData);
    this.studProfData = this.localLib.getStudprofData().subscribe(x => this.studProfData = x)
  }
  res:any
  ngAfterContentChecked(): void {
    
    for (let iterator in this.studProfData) {
            if ( this.studProfData[iterator].name ==  this.localLib.studInfostandsAt) {
              this.res =  this.studProfData[iterator];
            }
          }}
//   fData: any
//   res: any
//   ngAfterContentChecked(): void {
//     this.ar.queryParams.subscribe((p: any) => {
//       this.fData = p.data
//       console.log(this.fData);
//       for (const iterator of this.studProfData) {
//         if (String(iterator.name).match(String(this.fData))) {
//           this.res = iterator;
//         }
//       }
//     })
//   }
  


}
