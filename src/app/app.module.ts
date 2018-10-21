import { NgModule } from '@angular/core';
 import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
 @NgModule({
  declarations: [
    AppComponent
    AppComponent,
    QuoteComponent,
    QuoteDetailsComponent
  ],
  imports: [
    BrowserModule
   ],
   providers: [],
   bootstrap: [AppComponent]
 })
 export class AppModule { }