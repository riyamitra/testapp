import { Component, OnInit, Input, } from '@angular/core';

@Component({
  selector: 'app-teams-card',
  templateUrl: './teams-card.component.html',
  styleUrls: ['./teams-card.component.css']
})

export class TeamsCardComponent implements OnInit {
  @Input() teams;

  constructor() { }

  ngOnInit() {
  }


}

