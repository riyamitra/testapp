import { Component, OnInit, Input } from '@angular/core';
import { Tasks } from './task';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.css']
})
export class DashboardCardComponent implements OnInit {
  @Input() task: Array<Tasks>;
  constructor() { }

  ngOnInit() {
  }

}
