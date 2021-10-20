import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { ListingTableComponent } from './components/listing-smart/listing-table/listing-table.component';
import { OnlyFirstWordsPipe } from './pipes/only-first-words.pipe';
import { ListingPaginatorComponent } from './components/listing-smart/listing-paginator/listing-paginator.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ListingTableComponent,
    OnlyFirstWordsPipe,
    ListingPaginatorComponent
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
