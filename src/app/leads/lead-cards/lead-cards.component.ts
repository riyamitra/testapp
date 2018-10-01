import { Component, OnInit, Input } from '@angular/core';
import { Leads } from '../pojo/leads';

@Component({
  selector: 'app-lead-cards',
  templateUrl: './lead-cards.component.html',
  styleUrls: ['./lead-cards.component.css']
})
export class LeadCardsComponent implements OnInit {
  @Input() leads: Leads;
  name: string;
  constructor() { }

  ngOnInit() {
  }
  sampleClick() {
    console.log('clicked!!');
  }
}
