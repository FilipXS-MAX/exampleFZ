import { Component, Input, OnInit } from '@angular/core';
import { user } from '../interface-users';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listing-table',
  templateUrl: './listing-table.component.html',
  styleUrls: ['./listing-table.component.scss']
})
export class ListingTableComponent implements OnInit {

  @Input() users: user[] = [];

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  openDetailCard(user: user) {
    this._router.navigate(['/user', String(user.id)]);
  }

}
