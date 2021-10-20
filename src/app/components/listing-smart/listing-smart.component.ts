import { Component, OnInit } from '@angular/core';
import { ListingServiceService } from 'src/app/services/listing-service.service';
import { listOfUsers, user } from './interface-users';

@Component({
  selector: 'app-listing-smart',
  templateUrl: './listing-smart.component.html',
  styleUrls: ['./listing-smart.component.scss']
})
export class ListingSmartComponent implements OnInit {

  constructor(private _listingServiceService: ListingServiceService) { }

  public allUsers: user[] = [];

  ngOnInit(): void {
    this._listingServiceService.downloadAllUsers("1").subscribe((users: listOfUsers) => {
      console.log(users.data)
      this.allUsers = users.data;
      
    });
  }

}
