import { Component, OnInit } from '@angular/core';
import { listOfUsers, user } from './interface-users';

import { ListingServiceService } from 'src/app/services/listing-service.service';
import { GlobalVariablesService } from 'src/app/services/global-variables.service';

@Component({
  selector: 'app-listing-smart',
  templateUrl: './listing-smart.component.html',
  styleUrls: ['./listing-smart.component.scss']
})
export class ListingSmartComponent implements OnInit {

  public allUsers: user[] = [];
  public numberOfPages: number = 0;


  constructor(private _listingServiceService: ListingServiceService,
              private _globalVariablesService: GlobalVariablesService) { }


  ngOnInit(): void {
    this.downloadData("1")
  }

  downloadData(page: string) {

    this._listingServiceService.downloadData(page).subscribe((users: listOfUsers) => {
      this.numberOfPages = users.total_pages
      this.allUsers = users.data;
      this._globalVariablesService.setUsers(users.data)
    });
  }

  changePage(event: any) {
    this.downloadData(event)
  }

}
