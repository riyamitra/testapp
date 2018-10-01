import { Component, OnInit, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { Dropdown } from './dropdown';
import { DataService } from './service/service.service';



@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
    items = ['asdsa', 'sadasda', 'sagfd'];
    dropdown: Array<Dropdown>
    selecteditem
    constructor(private dataService: DataService, private cd: ChangeDetectorRef) { }

    ngOnInit() {
        this.dataService.getDropdown().subscribe(resp => {
            this.dropdown = resp.response
            console.log('this.dropdown')
            console.log(this.dropdown)

        });

    }


}


