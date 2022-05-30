import { JsonPipe } from '@angular/common';
import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import { bookflightData } from '../models/bookflightModel';
import { PersonData } from '../models/personModel';


@Injectable()
export class BookingService
{
    //private _booking='http://localhost:9000/api/Booking/GetAllBooking';
    private _booking='http://localhost:9000/Booking/GetAllBooking';
    private _recordByEmailIdURL='http://localhost:9000/Booking/HistoryWithEmail';
    private _recordByPnrURL='http://localhost:9000/Booking/TicketDetailsByPNR';
    private _cancelTicket='http://localhost:9000/Booking/CancelTicket'
    private _loginuserdetailURL='http://localhost:9000/login/loginuserdetail'
    constructor(private http:HttpClient,private router:Router) {
               
    }
    
    getloginUserDetail(username:any)
    {
        var link=this._loginuserdetailURL+"?user="+username+"";
        return this.http.get<any>(link);
    }
    cancelTicket(PNR:any)
    {
        return this.http.delete<any>(this._cancelTicket+"?pnr="+PNR)
    }
    getTicketByPNR(PNR:any)
    {
        return this.http.get<any>(this._recordByPnrURL+"?pnr="+PNR);
    }
    getAllBookingByEmailId(emailId:any)
    {
        return this.http.get<any>(this._recordByEmailIdURL+"?emailId="+emailId);
    }
    getAllBooking()
    {
        return this.http.get<any>(this._booking);
    }
    
}

