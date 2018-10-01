import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { AppConfiguration } from '../../../app.constant';
import { UserserviceService } from '../../../service/user/userservice.service';
import { TeamAnalysis } from '../../../pojo/dashboard/team_analysis';

@Injectable({
  providedIn: 'root'
})
export class DashboardContainerService {
  listOfPiplelines;
  user;
  constructor(private http: HttpClient, private userservice: UserserviceService) { }

  fetchPipelineList() {
    this.user = this.userservice.getCurrentUser();
    let url = AppConfiguration.ServerListOfPipelines.replace('user_id', this.user.id);
    return this.http.get<any>(url)
      .pipe(
        tap(heroes => this.log('fetched pipeline list')),
        catchError(this.handleError('getPipelineList', []))
      );
  }

  fetchTeamAnalysisTeamData(selectedPipeline) {
    let url = AppConfiguration.ServerWithTeamAnalysis.replace('team_analysis?', 'individual_analysis?').replace('user_id', this.user.id).replace('pipeline_id', selectedPipeline);
    return this.http.get<any>(url)
      .pipe(
        tap(heroes => this.log('fetched team list')),
        catchError(this.handleError('getTeamData', []))
      );
  }

  fetchTeamAnalysisIndividualData(selectedPipeline) {
    let url = AppConfiguration.ServerWithTeamAnalysis.replace('user_id', this.user.id).replace('pipeline_id', selectedPipeline);

    return this.http.get<any>(url)
      .pipe(
        tap(heroes => this.log('fetched individual list')),
        catchError(this.handleError('getIndividualData', []))
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
