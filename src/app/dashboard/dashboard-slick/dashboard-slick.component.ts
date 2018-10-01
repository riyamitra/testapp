import { Component, OnInit } from '@angular/core';
import { Tasks } from '../dashboard-card/task';
import { DashboardServiceService } from '../dashboard-service.service';

@Component({
  selector: 'app-dashboard-slick',
  templateUrl: './dashboard-slick.component.html',
  styleUrls: ['./dashboard-slick.component.css']
})
export class DashboardSlickComponent implements OnInit {

  slides: Array<Tasks>

  slideConfig = { "slidesToShow": 3, "slidesToScroll": 3 };

  constructor(private taskService: DashboardServiceService) {

    this.taskService.getTasks().subscribe(resp => {
      console.log(resp.response.managerTasks)

      this.slides = resp.response.managerTasks;
      console.log("***********")
      console.log(this.slides)
    }
    )
  }

  ngOnInit() {
  }

}
