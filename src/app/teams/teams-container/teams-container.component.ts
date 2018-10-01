import { Component, OnInit, ElementRef } from '@angular/core';
import { TeamsService } from '../service/teams.service';
import { Teams } from '../pojo/teams';

@Component({
  selector: 'app-teams-container',
  templateUrl: './teams-container.component.html',
  styleUrls: ['./teams-container.component.css']
})
export class TeamsContainerComponent implements OnInit {
  teams: Array<Teams>;

  constructor(private teamsService: TeamsService, private elem: ElementRef) { }


  ngOnInit() {

    this.teamsService.getTeams().subscribe(resp => {
      console.log(resp.response);
      this.teams = resp.response;
      console.log('*********teams*********')
      console.log(this.teams);
      this.setCardHeight()
    })
  }


  setCardHeight() {
    setTimeout(() => {
      let max_height = 0;
      let parentelements = this.elem.nativeElement.querySelectorAll('.child_team');
      let childlements = this.elem.nativeElement.querySelectorAll('.child_team');

      for (let div of parentelements) {
        if (div.offsetHeight > max_height) {
          max_height = div.offsetHeight;
        }
      }
      console.log('max_height' + max_height);

      for (let div of childlements) {
        div.style.height = max_height + 'px'
      }

    }, 300)
  }
}
