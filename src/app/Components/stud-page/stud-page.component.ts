import { AfterContentChecked, AfterContentInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibSerService } from 'src/app/Service/lib-ser.service';

@Component({
  selector: 'app-stud-page',
  templateUrl: './stud-page.component.html',
  styleUrls: ['./stud-page.component.css']
})

export class StudPageComponent implements OnInit {
  // For Holding Student info
  Rdata: any
  // For holding upcoming books info.
  BookData: any
  // For storing the changes at the operations to admin page info.
  adData: any
  // For founding who is logged in
  loggedas: any
  // For  knowing which user having which book.
  res: any

  // Creating constructor for injecting Subscriber, which we used to do curd opearations from the server through service.
  constructor(private localLib: LibSerService, private router: Router) {
    this.adData = this.localLib.getAdminData().subscribe(x => this.adData = x)
    this.Rdata = this.localLib.getStudprofData().subscribe(x => this.Rdata = x)
    this.BookData = this.localLib.getUpcomingBooks().subscribe(x => this.BookData = x)
  }

  // By default, it is aligned to Dev
  ngOnInit(): void {
    this.loggedas = this.localLib.Currentprofile
  }

  // Creating multiple boolean variables to manipulate HTML.
  descS = false
  Hbook = false
  Abook = false
  rtnState = false

  // For showing Holding books for the particular login.
  HoldingBooks() {
    //Calling the Rtn method to get the user holding book
    this.Rtn() 
    this.descS = false
    this.Hbook = true
    this.Abook = false
    this.rtnState = false
  }

  // For showing the books, which going to utilize by the logger
  Abooks() {
    this.descS = false
    this.Hbook = false
    this.Abook = true
    this.rtnState = false
  }

  //  Method, which helps us to get the user holding book And to manipulate the HTML.
  Rtn() {
    for (let key in this.Rdata) {
      if (this.Rdata[key].name == this.loggedas) {
        this.res = this.Rdata[key]
      }
    }
    this.rtnState = true
    this.descS = false
    this.Hbook = false
    this.Abook = false
  }

  // Variable for temporary data From the student to the admin.
  // Method to return the book (Info's) from the student login to the admin portal (info's) .
  data: any
  ProcessRtn() {
    if(this.res.Books!="No Record(s)"){
      if (confirm("Are you Sure!You are Return the book " + this.res.Books)) {
        this.data = {
          name: String(this.res.name),
          Books: String(this.res.Books),
          duedate: String(this.res.duedate)
        } 
        // Calling the method from the service to post the data to the admin from the student.
        this.localLib.postReturnBooks(this.data)
        alert("Your Request is in queue")
    }
    else alert("Returning the book request has been canceled.");
   }
   else alert("You are not having any books to Return")
  }

  // Variables to hold the description of the (clicked) book and the name of the (clicked) book.
  desc: any
  bookName: any

  // Method helps us to know the description of the book, which we clicked.
  callDes(ClickedBook: any) {
    this.descS = true
    this.bookName = ClickedBook
    // Running an iteration to.Make the description for the particular clicked book name.
    for (const iterator of this.BookData) {
      if (iterator.name == ClickedBook) {
        this.desc = iterator.desc
      }
    }
  }

  // Helps us to buy the book, which we interested.
  BuyBook() {
    // Iteration to found the student data And update The particular book to the record
    for (let key in this.Rdata) {
      if (this.loggedas == this.Rdata[key].name && this.Rdata[key].Books == "No Record(s)") {
        if (confirm("Are you sure you are going to borrow the book " + this.bookName)) {
          this.localLib.addBookToStud((parseInt(key) + 1), this.bookName, this.Rdata[key])
          // Ipiration to update the record for admin page.
          for (let key2 in this.adData) {
            if (this.adData[key2].Username == this.loggedas) {
              this.localLib.addBookToAdData((parseInt(key2) + 1), this.bookName, this.adData[key])
            }
          }
        }
        else alert("Not eligible.If you were holding any book, return it and try again");
      }
    }
  }

  // Method to go to the previous Component
  back() {
    this.router.navigate(["./Signin"])
    this.localLib.Currentprofile = "Signin"
  }
}