import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module'; 
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';

@NgModule({
  declarations: [
    AppComponent,            
    CountryListComponent,    
    CountryDetailComponent   
  ],
  imports: [
    BrowserModule,           
    HttpClientModule,        
    FormsModule,             
    AppRoutingModule         
  ],
  bootstrap: [AppComponent]  
})
export class AppModule {}
