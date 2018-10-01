import { Component, OnInit } from '@angular/core';
import { DashboardContainerService } from './service/dashboard-container.service';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { AppConfiguration } from '../../app.constant';
import { UserserviceService } from '../../service/user/userservice.service';

@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.css']
})
export class DashboardContainerComponent implements OnInit {

  constructor(private dashboardContainerService: DashboardContainerService, private userService: UserserviceService) { }
  selectedPipeline = 98;
  pipelineList = new Array();
  ngOnInit() {
    this.dashboardContainerService.fetchPipelineList().subscribe(resp => {
      console.log(resp.response);
      this.pipelineList = resp.response;
    })

  }
  public beforeChange($event: NgbTabChangeEvent) {
    console.log($event)
    console.log('selected tab is ' + $event.nextId)

    if ($event.nextId === 'tab-teams') {
      this.dashboardContainerService.fetchTeamAnalysisTeamData(this.selectedPipeline).
        subscribe(data => {
          console.log(data);
        })
    }
  }

}
