import { Component, Input, OnInit } from '@angular/core';
import { user } from '../interface-users';

@Component({
  selector: 'app-listing-table',
  templateUrl: './listing-table.component.html',
  styleUrls: ['./listing-table.component.scss']
})
export class ListingTableComponent implements OnInit {

  @Input() users: user[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
