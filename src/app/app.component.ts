import { Component } from '@angular/core';
import { AuthService } from './services/auth.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  title = 'FlightManagementUIApp';
  /**
   *
   */
  constructor(private _authService:AuthService) { }

  LoggedOut()
  {
    return this._authService.logoutUser();
  }

  loggedIn(input:boolean)
  {
    if(input)
    return this._authService.loggedIn();
    else
    return !this._authService.loggedIn();
  }
}
