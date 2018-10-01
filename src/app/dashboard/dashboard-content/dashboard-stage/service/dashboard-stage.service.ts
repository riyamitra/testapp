import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { AppConfiguration } from '../../../app.constant';
import { DashboardPipeline } from '../../../pojo/dashboard/dashboardPipeLine';
import { UserserviceService } from '../../../service/user/userservice.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardStageService {
  @Input() selectedPipeline;
  user;
  isError: boolean;
  constructor(private http: HttpClient, private userservice: UserserviceService) { }


  fetchPipelineTask() {
    this.user = this.userservice.getCurrentUser();
    let url = AppConfiguration.ServerWithTeamAnalysis.replace('user_id', this.user.id).replace('pipeline_id', this.selectedPipeline);
    return this.http.get<any>(url)
      .pipe(
        tap(heroes => this.log('fetched pipeline task')),
        catchError(this.handleError('getPipelineTask', []))
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
