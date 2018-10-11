import { Injectable } from '@angular/core';
import { TreeviewItem } from "ngx-treeview";
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})


export class TreeviewcomponnetService {

  constructor(private http: HttpClient) { }

  public getdata(): TreeviewItem[] {
    const childrenCategory = new TreeviewItem({
      text: 'Children', value: 1, collapsed: true, children: [
        { text: 'Baby 3-5', value: 11 },
        { text: 'Baby 6-8', value: 12 },
        { text: 'Baby 9-12', value: 13 }
      ]
    });
    const itCategory = new TreeviewItem({
      text: 'IT', value: 9, children: [
        {
          text: 'Programming', value: 91, children: [{
            text: 'Frontend', value: 911, children: [
              { text: 'Angular 1', value: 9111 },
              { text: 'Angular 2', value: 9112 },
              { text: 'ReactJS', value: 9113, disabled: true }
            ]
          }, {
            text: 'Backend', value: 912, children: [
              { text: 'C#', value: 9121 },
              { text: 'Java', value: 9122 },
              { text: 'Python', value: 9123, checked: false, disabled: true }
            ]
          }]
        },
        {
          text: 'Networking', value: 92, children: [
            { text: 'Internet', value: 921 },
            { text: 'Security', value: 922 }
          ]
        }
      ]
    });
    const teenCategory = new TreeviewItem({
      text: 'Teen', value: 2, collapsed: true, disabled: true, children: [
        { text: 'Adventure', value: 21 },
        { text: 'Science', value: 22 }
      ]
    });
    const othersCategory = new TreeviewItem({ text: 'Others', value: 3, checked: false, disabled: true });




    return [childrenCategory, itCategory, teenCategory, othersCategory];
  }


  public getMystaticItem(): Array<TreeviewItem> {
    let myitem = new Array<TreeviewItem>();

    for (let i = 0; i < 10; i++) {
      let item = new TreeviewItem({
        text: 'Children ' + i, value: 1, collapsed: true, children: [
          { text: 'Baby 3-' + i, value: 11 + i },
          { text: 'Baby 6-' + i, value: 12 + i },
          { text: 'Baby 9-1' + i, value: 13 + i }
        ]
      });
      myitem.push(item);
    }
    return myitem;
  }


  public getHeroes(): Observable<any> {
    return this.http.get<any>('https://sales.talentify.in/istar/rest/sales_manager/3/pipelines')
      .pipe(
        tap(heroes => this.log('fetched heroes')),
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
