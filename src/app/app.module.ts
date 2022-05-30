import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AirlineComponent } from './airline/airline.component';
import { AddAirlinesComponent } from './airline/add-airlines/add-airlines.component';
import { InventoryComponent } from './inventory/inventory.component';
import { AddInventoryComponent } from './inventory/add-inventory/add-inventory.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './services/auth.services';
import { AuthGaurd } from './services/auth.guard';
import { AirlineService } from './services/airline.services';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { BookingService } from './services/booking.services';
import { InventoryService } from './services/inventory.services';
import { BookingComponent } from './booking/booking.component';
import { HistoryComponent } from './booking/history/history.component';





@NgModule({
  declarations: [    
    AppComponent,    
    HeaderComponent,
    FooterComponent,
    InventoryComponent,
    LoginComponent,    
    AirlineComponent,     
    AddAirlinesComponent,
    AddInventoryComponent,
    HomeComponent,
    RegisterComponent,
    BookingComponent,
    HistoryComponent
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    FormsModule,    
    ReactiveFormsModule,    
    HttpClientModule,    
  ],
  providers: [AirlineService,BookingService,InventoryService,AuthService,AuthGaurd,{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
