import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { __metadata } from 'tslib';
import { BookingData } from '../models/bookingModel';
import { PersonData } from '../models/personModel';
import { RegisterModel } from '../models/registerModel';
import { BookingService } from '../services/booking.services';
import { SharedData } from '../shared/shared.component';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  bookingdetail: BookingData = new BookingData();
  persondataItem: PersonData = new PersonData();
  inventoryData: any
  personlist: Array<PersonData> = new Array<PersonData>();
  constructor(private _data: SharedData, private _service: BookingService, private http: HttpClient,private _router:Router) {
    this.AddRow();
    this._service.getloginUserDetail(localStorage.getItem('user')).subscribe(Res => { this.data = Res }, err => console.log(err));
  }
  personArray: Array<PersonData> = new Array<PersonData>();
  ngOnInit(): void {

    this._data.book.subscribe(res => { this.inventoryData = res });
  }
  AddRow() {

    this.persondataItem = new PersonData();
    this.personArray.push(this.persondataItem);
  }
  DeletRow(index: any) {
    this.personArray = this.personArray.slice(index);
    return this.personArray;

  }
  data: RegisterModel = new RegisterModel();
  userbook: any = {};
  userbookarr: any = [];
  //user: any;
  submit() {
    for(var i=0;i<this.personArray.length;i++)
    {
      /*if(this.personArray[i].age==0 ||this.personArray[i].class==''||this.personArray[i].firstName==''||this.personArray[i].lastName==''||this.personArray[i].gender)
      {
        alert("Please enter the details for User");
        return;
      }*/
    }
    var name;
    if (localStorage.getItem('user') == null) {
      this.bookingdetail.emailId = 'user@gmail.com'
      this.bookingdetail.name = 'user';
    }
    else {
      name = localStorage.getItem('user');
      this.bookingdetail.name = String(name);
     
      this.bookingdetail.emailId = this.data.email;
    }
    this.bookingdetail.flightNumber = this.inventoryData.flightNumber;
    this.bookingdetail.meal = this.inventoryData.meal;    

    //this.user = this.bookingdetail;
    
    this.userbook={name:this.bookingdetail.name,emailId:this.bookingdetail.emailId,
      meal:this.bookingdetail.meal,flightNumber:this.bookingdetail.flightNumber,
      users:this.personArray }
    //this.userbook
    var result:any;
    this.http.post("http://localhost:9000/Booking/Post", this.userbook).subscribe((res:any) => {
    alert("Successfully Booked Ticked\n ")    
    this._router.navigate(["/home"]);
    }, err => {
      var errres=err.error.message;     
      alert(errres);
    });
    //this._service.bookFlightForUser(this.userbookarr).subscribe(res=>alert(res),err=>console.log(err));
  }
}
