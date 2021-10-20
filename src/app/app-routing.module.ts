import { ListingSmartComponent } from './components/listing-smart/listing-smart.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DetailCardUserComponent } from './components/detail-card-user/detail-card-user.component';

const routes: Routes = [
  
  {path: '', redirectTo: '/listing-table', pathMatch: 'full'},
  {path: 'listing-table', component: ListingSmartComponent},
  {path: 'user/:id', component: DetailCardUserComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  ListingSmartComponent,
  DetailCardUserComponent,
  PageNotFoundComponent
]