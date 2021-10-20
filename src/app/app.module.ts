import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ListingTableComponent } from './components/listing-smart/listing-table/listing-table.component';
import { ListingSmartComponent } from './components/listing-smart/listing-smart.component';
import { OnlyFirstWordsPipe } from './pipes/only-first-words.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListingTableComponent,
    ListingSmartComponent,
    OnlyFirstWordsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
