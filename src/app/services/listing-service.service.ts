import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListingServiceService {

  constructor(private _http: HttpClient) { }

  private api = {
    url: "https://reqres.in/api/users",
    pageParameter: "page"
  }


  downloadAllUsers(pageNumber: string): Observable<any> {
    //return this._http.get<any>(`${this.api.url}?${this.api.pageParameter}=${pageNumber}`);
    return this._http.get<any>(`http://localhost:4200/assets/dummy.json`);
  }
}
