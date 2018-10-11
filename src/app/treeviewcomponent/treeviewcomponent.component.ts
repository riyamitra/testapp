import { Component, OnInit } from '@angular/core';
import { TreeviewConfig, TreeviewItem } from 'ngx-treeview';
import { TreeviewcomponnetService } from './service/treeviewcomponnet.service';

@Component({
  selector: 'app-treeviewcomponent',
  templateUrl: './treeviewcomponent.component.html',
  styleUrls: ['./treeviewcomponent.component.css'],
  providers: [TreeviewcomponnetService]
})
export class TreeviewcomponentComponent implements OnInit {

  items: TreeviewItem[];
  filter_item: TreeviewItem[];
  config = TreeviewConfig.create({
    hasAllCheckBox: true,
    hasFilter: true,
    hasCollapseExpand: true,
    decoupleChildFromParent: false,
    maxHeight: 400
  });

  buttonClasses = [
    'btn-outline-primary',
    'btn-outline-secondary',
    'btn-outline-success',
    'btn-outline-danger',
    'btn-outline-warning',
    'btn-outline-info',
    'btn-outline-light',
    'btn-outline-dark'
  ];
  buttonClass = this.buttonClasses[0];

  constructor(private service: TreeviewcomponnetService) { }

  ngOnInit() {
    this.items = this.service.getMystaticItem();

    this.service.getHeroes().subscribe(data => {
      console.log('data.response******');
      console.log(data.response);
      let treeitems = new Array<TreeviewItem>();
      for (let pipeline of data.response) {
        let stagearray = new Array<TreeviewItem>();
        for (let stage of pipeline.stages) {
          let taskTypeArray = new Array<TreeviewItem>();
          for (let tasktype of stage.taskTypes) {
            let tasktypeitem = new TreeviewItem({
              text: tasktype, value: stage.id + 1
            })
            taskTypeArray.push(tasktypeitem);
          }
          let stageitem = new TreeviewItem({
            text: stage.name, value: stage.id, children: taskTypeArray
          })
          stagearray.push(stageitem);
        }
        let pipelineitem = new TreeviewItem({
          text: pipeline.name, value: pipeline.id, children: stagearray
        })
        treeitems.push(pipelineitem);
      }
      this.items = treeitems;
    });
  }
  // console.log(this.items);

  //this.filter_item = this.service.getMystaticItem();






  onFilterChange(value: string) {
    console.log('filter:', value);
    // this.items = this.filter_item;
    // let temp = new Array<TreeviewItem>();
    // /* iterating all treview parent node for searching  */
    // for (let item of this.items) {
    //   if (item.text.indexOf(value) > -1) {
    //     /* if parent text matches search value then its get filter directly without getting search in child text values */

    //     temp.push(item);
    //     console.log('********item' + item + '**********temp' + temp);
    //   } else {
    //     /* for filter children we need to create a temporary parent so that we can display the parent node of 
    //     searched child item */
    //     let temp_parent = new TreeviewItem({
    //       text: item.text, value: 1, collapsed: true, children: new Array<any>()
    //     })
    //     for (let child of item.children) {
    //       if (child.text.indexOf(value) > -1) {
    //         /* child get pushed when its text matches search values */
    //         temp_parent.children.push(child);
    //         console.log('********child.text.indexOf(value)' + child.text.indexOf(value));
    //         /* temporary parent will only be pushed if search value match child text values */
    //         // temp.push(temp_parent);
    //       }
    //     }
    //   }
    // }
    // this.items = temp;
  }

  onSelectedChange(event) {
    console.log(event)
  }


}
