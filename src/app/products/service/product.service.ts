import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get<any>('https://sales.talentify.in/istar/rest/sales_manager/198101/products?page=0')
      .pipe(
        tap(heroes => this.log('fetched URL')),
        catchError(this.handleError('getHeroes', []))
      );
  }

  getDropdown(): Observable<any> {
    return this.http.get<any>('https://sales.talentify.in/istar/rest/sales_manager/3/product_list')
      .pipe(
        tap(heroes => this.log('fetched Dropdown items')),
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
