import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListingServiceService {

  private api = {
    url: "https://reqres.in/api/users",
    pageParameter: "page"
  }

  constructor(private _http: HttpClient) { }


  downloadData(pageNumber: string): Observable<any> {
    let downloadUrl = `${this.api.url}?${this.api.pageParameter}=${pageNumber}`
    return this._http.get<any>(downloadUrl);
  }
}
