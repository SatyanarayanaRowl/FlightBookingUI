import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InventoryData } from '../models/inventoryModel';
import { InventoryService } from '../services/inventory.services';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  inventoryData:InventoryData=new InventoryData();
  inventoryModellist:Array<InventoryData>=new Array<InventoryData>();
  IsError:boolean=false;  
  errorRes:string='';
  constructor(private _auth:InventoryService,private _router:Router) { }

  ngOnInit(): void {   
    
      this._auth.getAllInventory().subscribe(res => {
       this.inventoryModellist=res   
      },
        err => {this.IsError=true;
          this.errorRes="No Inventory exists";
          console.log(err)});      
  }
  addInventory()
  {
    this._router.navigate(["\addinventory"]);
  }
}
