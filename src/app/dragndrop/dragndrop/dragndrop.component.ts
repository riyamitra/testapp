import { Component, OnInit } from '@angular/core';
import { DndDropEvent } from 'ngx-drag-drop';
class Widget {
  constructor(public name: string) { }
}
@Component({
  selector: 'app-dragndrop',
  templateUrl: './dragndrop.component.html',
  styleUrls: ['./dragndrop.component.css']
})
export class DragndropComponent implements OnInit {
  targetList: Widget[] = [];
  addTo($event: any) {
    this.targetList.push($event.dragData);
  }
  sourceList: Widget[] = [
    new Widget('1'), new Widget('2'),
    new Widget('3'), new Widget('4'),
    new Widget('5'), new Widget('6')
  ];
  constructor() { }

  ngOnInit() {




  }
}
