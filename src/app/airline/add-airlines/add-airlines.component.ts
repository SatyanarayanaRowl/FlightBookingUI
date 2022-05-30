import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AirlineData } from 'src/app/models/airlineModel';
import { AirlineService } from 'src/app/services/airline.services';

@Component({
  templateUrl: './add-airlines.component.html',
  styleUrls: ['./add-airlines.component.css']
})
export class AddAirlinesComponent  {

  airlineData:AirlineData=new AirlineData();
  constructor(private _auth:AirlineService,private _router:Router) { }

  

  registerAirline()
  {
    debugger;
    this._auth.registerAirline(this.airlineData).subscribe(res => {
      //localStorage.setItem('token', res.token)    
      alert("Airline Added successfully")  ;
      this._router.navigate(["/airline"]).then(()=>{window.location.reload()})  
    },
       err => alert(err.error.message));
  }
    


}
