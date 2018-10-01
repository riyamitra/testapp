import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { DashboardStageService } from './service/dashboard-stage.service';
import { directiveCreate } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-dashboard-stage',
  templateUrl: './dashboard-stage.component.html',
  styleUrls: ['./dashboard-stage.component.css']
})
export class DashboardStageComponent implements OnInit {
  @Input() teamAnalysisObject;
  abc = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

  constructor(private dashboardStageService: DashboardStageService, private elem: ElementRef) { }

  ngOnInit() {

    // this.dashboardStageService.fetchPipelineTask().subscribe(
    //   data => {
    //     console.log('*********fetch pipeline task**********')
    //     console.log(data);
    //   }
    // )
  }

  // setleftmargin() {
  //   setTimeout(() => {
  //     let elements = this.elem.nativeElement.querySelectorAll('.setbuttonmargin');

  //   }
  // }

}
