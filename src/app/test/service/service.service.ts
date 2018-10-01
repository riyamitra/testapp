import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap, delay } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})


export class DataService {
  constructor(private http: HttpClient) { }


  getDropdown(): Observable<any> {
    return this.http.get<any>('https://sales.talentify.in/istar/rest/sales_manager/3/product_list')
      .pipe(
        tap(heroes => this.log('fetched Dropdown from test')),
        catchError(this.handleError('getHeroes', []))
      );
  }


  getPeople(term: string = null): Observable<any> {
    return this.http.get<any>('https://sales.talentify.in/istar/rest/sales_manager/3/users_list?query=' + term)
      .pipe(
        tap(heroes => this.log('fetched Dropdown from test')),
        catchError(this.handleError('getHeroes', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(message);
  }
}




function getMockPeople() {
  return [
    {
      'id': '5a15b13c36e7a7f00cf0d7cb',
      'index': 2,
      'isActive': true,
      'picture': 'http://placehold.it/32x32',
      'age': 23,
      'name': 'Karyn Wright',
      'gender': 'female',
      'company': 'ZOLAR',
      'email': 'karynwright@zolar.com',
      'phone': '+1 (851) 583-2547'
    },
    {
      'id': '5a15b13c2340978ec3d2c0ea',
      'index': 3,
      'isActive': false,
      'picture': 'http://placehold.it/32x32',
      'age': 35,
      'name': 'Rochelle Estes',
      'disabled': true,
      'gender': 'female',
      'company': 'EXTRAWEAR',
      'email': 'rochelleestes@extrawear.com',
      'phone': '+1 (849) 408-2029'
    }
  ]
}




// export class ServiceService {

//   constructor(private http: HttpClient) { }




// }
