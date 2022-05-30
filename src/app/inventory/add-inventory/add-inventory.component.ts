import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AirlineData } from 'src/app/models/airlineModel';
import { InventoryData } from 'src/app/models/inventoryModel';
import { AirlineService } from 'src/app/services/airline.services';
import { InventoryService } from 'src/app/services/inventory.services';

@Component({
  selector: 'app-add-inventory',
  templateUrl: './add-inventory.component.html',
  styleUrls: ['./add-inventory.component.css']
})


export class AddInventoryComponent implements OnInit {
  inventoryData:InventoryData=new InventoryData();
  constructor(private _service:InventoryService,private _airlineService:AirlineService,private _route:Router) { }
  airlineModellist:Array<AirlineData>=new Array<AirlineData>();  
  ngOnInit(): void {
    this._airlineService.getAllAirline().subscribe(res=>{this.airlineModellist=res},err=>console.log(err));
  }
  ProductDetails: object = []; 
  selected:any;
  update(e:any){
   
    this.selected = e.target.value
  }
  SearchAirline(data:any)
  {    
    let obj = this.airlineModellist.filter(m => m.airlineNo == data);  
this.ProductDetails = obj;  
return this.ProductDetails; 
  }
  Success()
  {
    alert("Add Successfully");
    this._route.navigate(["\inventory"]);
  }
  Error(res:any)
  {
    alert("Failed to add Inventory");
    console.log(res);
  }
  submitInventory()
  {
    debugger;
    if(this.inventoryData.flightNumber==""||this.inventoryData.startDateTime===""||this.inventoryData.businessClassSeat===0
    ||this.inventoryData.airlineNo==""||this.inventoryData.endDateTime===""||this.inventoryData.nonBusinessClassSeat===0
    ||this.inventoryData.fromPlace==""||this.inventoryData.scheduleDays===""||this.inventoryData.ticketCost===0
    ||this.inventoryData.toPlace==""||this.inventoryData.instrumentUsed===""||this.inventoryData.noOfRows===0
    ||this.inventoryData.meal==="")
    {
      alert("Please enter details");
      return;
    }
    return this._service.addInventory(this.inventoryData).subscribe(res=>this.Success(),err=>this.Error(err))
  }
}
