import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class AuthService
{
    private _loginUrl='http://localhost:9000/login/GetUser';
    private _registerUrl='http://localhost:9000/login/AddUser';
    constructor(private http:HttpClient,private router:Router) {
               
    }

    loginUser(user:any)
    {
      
        return this.http.get<any>(this._loginUrl+"?UserName="+user.userName+"&PassWord="+user.passWord);
    }

    registerUser(user:any)
    {
        return this.http.post<any>(this._registerUrl,user);
    }

    logoutUser()
    {
        localStorage.removeItem('token');
        localStorage.removeItem('isAdmin');
        localStorage.removeItem('user');
        this.router.navigate(['/home']).then(()=>{window.location.reload()})  ;
    }

    getToken()
    {
        return localStorage.getItem('token');
    }

    adminDetail()
    {               
        return localStorage.getItem('isAdmin');
    }
    loggedIn()
    {
        return !!localStorage.getItem('token');
    }
}