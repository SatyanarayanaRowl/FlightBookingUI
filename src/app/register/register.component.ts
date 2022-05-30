import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterModel } from '../models/registerModel';
import { AuthService } from '../services/auth.services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'  
})
export class RegisterComponent {

  registerUserData:RegisterModel=new RegisterModel();
  constructor(private _auth:AuthService,private _router:Router) { }

  registerUser() {
    debugger;
    var data={
      userName:this.registerUserData.userName,
      email:this.registerUserData.email,
      passWord:this.registerUserData.passWord
    }
    var result;
    this._auth.registerUser(data).subscribe(res => {
      alert("Register Successfully !! Please login");
    this._router.navigate(['\login']);  
                    
    })
    
      var logindata={
        userName:this.registerUserData.userName,
        passWord:this.registerUserData.passWord
      }                   
      
  }
  


  hasError(typeofvalidator:string,controlname:string):boolean{
    return this.registerUserData.formRegisterGroup.controls[controlname].hasError(typeofvalidator);
  }
}
