import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AirlineData } from '../models/airlineModel';
import { AirlineService } from '../services/airline.services';

@Component({
  selector: 'app-airline',
  templateUrl: './airline.component.html',
  styleUrls: ['./airline.component.css']
})
export class AirlineComponent implements OnInit {

  airlineData:AirlineData=new AirlineData();
  airlineModellist:Array<AirlineData>=new Array<AirlineData>();
  IsError:boolean=false;
  errorRes:string='';
  constructor(private _auth:AirlineService,private _route:Router) { }

  ngOnInit(): void {       
      this._auth.getAllAirline().subscribe(res => {        
       this.airlineModellist=res    
          
      },
        err =>{ this.IsError=true,this.errorRes=err.error.message});      
  }
  
  deleteAirline(index:any,airline:any)
  {
    this._auth.blockAirline(index,airline.airlineNo).subscribe(res=>{
      alert("Airline Blocked");
      this._route.navigate(["\airline"]).then(()=>{window.location.reload()})  
    },
    err => alert(err.error.message));
  }
  
  addAirline()
  {
    this._route.navigate(["\addairline"]);
  
  }
}


