import { Component, OnInit, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { distinctUntilChanged, debounceTime, switchMap } from 'rxjs/operators';
import { TeamsService } from '../service/teams.service';
import { Teams } from '../pojo/teams';

@Component({
  selector: 'app-teams-create',
  templateUrl: './teams-create.component.html',
  styleUrls: ['./teams-create.component.css'],
  //providers: [TeamsService]
})
export class TeamsCreateComponent implements OnInit {
  peopleTypeahead = new EventEmitter<string>();
  serverSideFilterItems = [];
  selectedPeople



  constructor(private teamsService: TeamsService, private cd: ChangeDetectorRef) { }

  ngOnInit() {

    this.peopleTypeahead.pipe(
      distinctUntilChanged(),
      debounceTime(300),
      switchMap(term => this.teamsService.getPeople(term))
    ).subscribe(x => {
      this.cd.markForCheck();
      this.serverSideFilterItems = x.response;
      console.log(this.serverSideFilterItems)
    }, (err) => {
      console.log(err);
      this.serverSideFilterItems = [];
    });


  }

}


