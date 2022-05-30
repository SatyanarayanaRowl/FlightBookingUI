import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class InventoryService {
    headers: any;
    private _inventoryURL = 'http://localhost:9000/Inventory/GetInventory';
    private _addInventoryUrl = 'http://localhost:9000/Inventory/AddInventory';
    private _searchFlightURL = 'http://localhost:9000/Search/GetAllFlightBasedUponPlaces';
    constructor(private http: HttpClient, private router: Router) {
    }

    getFlightByPlaces(fromplace: any, toplace: any) {
        /*let httparms = new HttpParams()
        httparms.set("fromplace", toplace);
        httparms.set('toplace', fromplace);
        let options = { params: httparms };*/
        var link=this._searchFlightURL+"?fromplace="+fromplace+"&toplace="+toplace+"";
        return this.http.get<any>(link);
    }
    getAllInventory() {
        return this.http.get<any>(this._inventoryURL);
    }

    addInventory(inventory: any) {
        debugger;
        var data = {
            flightNumber: inventory.flightNumber,
            airlineNo: inventory.airlineNo,
            fromPlace: inventory.fromPlace,
            toPlace: inventory.toPlace,
            startDateTime: inventory.startDateTime,
            endDateTime: inventory.endDateTime,
            scheduleDays: inventory.scheduleDays,
            instrumentUsed: inventory.instrumentUsed,
            businessClassSeat: Number(inventory.businessClassSeat),
            nonBusinessClassSeat: Number(inventory.nonBusinessClassSeat),
            ticketCost: Number(inventory.ticketCost),
            noOfRows: Number(inventory.noOfRows),
            meal: inventory.meal

        }
        return this.http.post<any>(this._addInventoryUrl, data);
    }

}