import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(private http: HttpClient) { }

  getPeople(term: string = null): Observable<any> {
    return this.http.get<any>('https://sales.talentify.in/istar/rest/sales_manager/3/users_list?query=' + term)
      .pipe(
        tap(heroes => this.log('fetched Dropdown from test')),
        catchError(this.handleError('getHeroes', []))
      );
  }

  getTeams(): Observable<any> {
    return this.http.get<any>('https://sales.talentify.in/istar/rest/sales_manager/3/teams')
      .pipe(
        tap(heroes => this.log('fetched teams')),
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
