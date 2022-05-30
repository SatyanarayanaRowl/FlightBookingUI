import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injector } from "@angular/core";
import { Observable } from "rxjs";
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from "./auth.services";

@Injectable()
export class TokenInterceptorService implements HttpInterceptor{
 
    constructor(private injector:Injector) {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let authService=this.injector.get(AuthService);
        var headers= new HttpHeaders({    
            'Content-Type': 'application/json',    
            'Authorization':'bearer '+authService.getToken(),
            'Access-Control-Allow-Origin': '*',                
            //'Access- Control - Allow - Methods': 'GET, POST, OPTIONS',    
            'Access-Control-Allow-Headers':'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
          })    
        let tokenizedReq=req.clone({
            headers:headers
        })
        return next.handle(tokenizedReq)
    }
}
