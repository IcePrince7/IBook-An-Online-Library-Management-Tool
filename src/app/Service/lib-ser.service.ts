import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LibSerService {
  // Variables it helps to find who is logged in
  CurrentprofileA: any = 'Admin'
  Currentprofile: any = "Dev"
  private update: any
  studInfostandsAt:any

  // Founding the current date to update in the server.
  date: any
  FutureDat: any

  constructor(private http: HttpClient) {
    setInterval(() => {
      this.date = new Date()
      this.FutureDat = new Date(this.date)
      this.FutureDat.setDate(this.FutureDat.getDate() + 10)
    }, 1000);
  }

  // Getting credentials From the server
  getCredentials() {
    return this.http.get(" http://localhost:3000/Credentials")
  }

  // Getting students information from the server
  getStudprofData() {
    return this.http.get(" http://localhost:3000/Students")
  }

  // Getting returned info's from the server.
  getreturnReq() {
    return this.http.get("http://localhost:3000/returns")
  }

  //Getting admin portal info From the server
  getAdminData() {
    return this.http.get(" http://localhost:3000/AD")
  }

  // Getting upcoming bar available books from the server.
  getUpcomingBooks() {
    return this.http.get("  http://localhost:3000/UbcomingBooks")
  }

  // Posting newly created credentials into the server Credential..
  Studvar:any
  postCredentials(Data: any,email:any,Reg_Id:any) {
    this.http.post(" http://localhost:3000/Credentials", Data).toPromise().then((D: any) => console.log(D)).catch((Err: any) => console.log("The error is : ", Err));
    this.putforUpdatingBook(Data)
    this.Studvar ={
      Reg_Id: String(Reg_Id),
      name: String( Data.Username),
      mailid: String(email),
      Books: String("No Record(s)"),
      Startdate: String("No Record(s)"),
      duedate: String("No Record(s)")
    }
    setTimeout(() => this.http.post(`http://localhost:3000/Students`, this.Studvar).toPromise().then((D: any) => console.log("posted stud data : " + D)), 400)

  }

  // Posting books going to return to the admin page.
  postReturnBooks(Data: any) {
    this.http.post("  http://localhost:3000/returns", Data).toPromise().then((D: any) => console.log(D)).catch((Err: any) => console.log("The error is : ", Err));;
  }

  // Deleting the holding book records of a particular student by the admin and putting the data into the server.
  putforUpdatingBook( Instanceobj: any,IdAddress: any =-1) {
    this.update = {
      Username: String(Instanceobj.Username),
      books: String("No Record(s)"),
      Startdate: ("No Record(s)"),
      duedate: String("No Record(s)")
    }
    if(IdAddress==-1){ setTimeout(() => this.http.post(`http://localhost:3000/AD/`, this.update).toPromise().then((D: any) => console.log("Putted admin data : " + D)), 100) }
    else setTimeout(() => this.http.put(`http://localhost:3000/AD/${IdAddress}`, this.update).toPromise().then((D: any) => console.log("Putted admin data : " + D)), 100)
  }

  // One's request cleared from the admin side. It needs to updated on the Returned records on the server.
  updateRequestData(IdAddress: any) {
    setTimeout(() => this.http.delete(`http://localhost:3000/returns/${IdAddress}`).toPromise().then((D: any) => console.log("Deleted data : " + D)), 150)
  }

  // Temp variable
  studupdate: any
  // Once requests cleared from the admin side, it needs to reflected on the student profile on the server
  updateStudProfData(Instanceobj: any,IdAddress: any) {
    this.studupdate = {
      Reg_Id: String(Instanceobj.Reg_Id),
      name: String(Instanceobj.name),
      mailid: String(Instanceobj.mailid),
      Books: String("No Record(s)"),
      Startdate: String("No Record(s)"),
      duedate: String("No Record(s)")
    }
    setTimeout(() => this.http.put(`http://localhost:3000/Students/${IdAddress}`, this.studupdate).toPromise().then((D: any) => console.log("posted stud data : " + D)), 400)
  }

  AddbookVarToStud: any // Temp variable
  // Updating the books, which student purchased to the student profile
  addBookToStud(IdAddress: any, bookName: string, Instanceobj: any) {
    this.AddbookVarToStud = {
      Reg_Id: String(Instanceobj.Reg_Id),
      name: String(Instanceobj.name),
      mailid: String(Instanceobj.mailid),
      Books: String(bookName),
      Startdate: String(`${this.date.getDate()}-${this.FutureDat.toLocaleString('default', { month: 'short' })}-${this.date.getFullYear()}`),
      duedate: String(String(`${this.FutureDat.getDate()}-${this.FutureDat.toLocaleString('default', { month: 'short' })}-${this.FutureDat.getFullYear()}`))
    }
    setTimeout(() => this.http.put(`http://localhost:3000/Students/${IdAddress}`, this.AddbookVarToStud).toPromise().then((D: any) => console.log("Putted admin data : " + D)), 150)
  }

  addBookToAdmin: any //TEmp variable
  // Updating the books, which student purchased to the Admin profile
  addBookToAdData(IdAddress: any, bookName: string, Instanceobj: any) {
    this.addBookToAdmin = {
      Username: String(Instanceobj.Username),
      books: String(bookName),
      Startdate: String(`${this.date.getDate()}-${this.FutureDat.toLocaleString('default', { month: 'short' })}-${this.date.getFullYear()}`),
      duedate: String(String(`${this.FutureDat.getDate()}-${this.FutureDat.toLocaleString('default', { month: 'short' })}-${this.FutureDat.getFullYear()}`))
    }
    setTimeout(() => this.http.put(`http://localhost:3000/AD/${IdAddress}`, this.addBookToAdmin).toPromise().then((D: any) => console.log("posted stud data : " + D)), 400)
  }
}
