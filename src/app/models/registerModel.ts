import { FormBuilder, FormControl, Validators } from "@angular/forms";

export class RegisterModel
{
    userName:string='';
    passWord:string='';
    email:string='';
    formRegisterGroup: any;
    constructor() {
        var _builder=new FormBuilder();
        this.formRegisterGroup=_builder.group({});        
        var validationcollection=[];        
        validationcollection.push(Validators.email);
        validationcollection.push(Validators.required);
       this.formRegisterGroup.addControl("passwordControl",new FormControl('',Validators.required));
       this.formRegisterGroup.addControl('emailControl',new FormControl('',Validators.email));
       this.formRegisterGroup.addControl('userNameControl',new FormControl('',Validators.required));
    }
}