import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ZamatoService {
  public restaurants = [];

  constructor( public http: HttpClient ) { }

  fetchRestuarants() {
    console.log('fetching restuarnts');
    let headers = {'content-type': 'application/json',
                    'accept': 'application/json',
                    'user-key': 'b7d07ffe2f5b69026b44d035c214ac8f'};

    let url = "https://developers.zomato.com/api/v2.1/search?entity_id=757&entity_type=city&count=20"
    return this.http.get(url, {headers: headers}).pipe(tap(response => {
        console.log(response);
        this.restaurants = response['restaurants'];
        console.log(this.restaurants);
    }));
  }
}
