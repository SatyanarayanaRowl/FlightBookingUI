import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { InventoryData } from "../models/inventoryModel";

@Injectable({
    providedIn:"root"
})
export class SharedData
{
     private bookSearchdata=new BehaviorSubject<InventoryData>(new InventoryData());
      book=this.bookSearchdata.asObservable();
      constructor()
      {}
        changeName(book:any)
        {
            this.bookSearchdata.next(book);
        }
        
       // booksearchdata:BehaviorSubject<InventoryData>;

    /*constructor() {                
    }

    changeName(name:string)
    {
        this.bookSearchdata.next(name);
    }*/
}