import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { user } from '../listing-smart/interface-users';

import { GlobalVariablesService } from 'src/app/services/global-variables.service';

@Component({
  selector: 'app-detail-card-user',
  templateUrl: './detail-card-user.component.html',
  styleUrls: ['./detail-card-user.component.scss']
})
export class DetailCardUserComponent implements OnInit {

  public detailOfUser = {} as user;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private _globalVariablesService: GlobalVariablesService) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id') || '');
      let user = this._globalVariablesService.getUserById(id);
      
      this.errorNavigate(user)
    })
  }

  errorNavigate(user: any) {
    if (typeof user == 'undefined') {
      this.router.navigate(['/listing-table'])
    } else {
      this.detailOfUser = user;
    }
  }

  goToListingpage() {
    this.router.navigate(['/listing-table'])
  }


}
