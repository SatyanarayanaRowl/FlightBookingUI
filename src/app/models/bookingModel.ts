import { PersonData } from "./personModel";

export class BookingData
{
   name:string='';
    emailId:string='';        
    meal:string='';    
    flightNumber:string='';  
    pnr:string='';
    users:Array<PersonData>=new Array<PersonData>();        
}