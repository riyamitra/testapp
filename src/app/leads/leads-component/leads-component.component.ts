import { Component, OnInit } from '@angular/core';
import { LeadsService } from '../service/leads.service';
import { Leads } from '../pojo/leads';

@Component({
    selector: 'app-leads-component',
    templateUrl: './leads-component.component.html',
    styleUrls: ['./leads-component.component.css']
})
export class LeadsComponentComponent implements OnInit {
    leads: Array<Leads>;
    email: string;
    numberofPages
    page;

    constructor(private leadsService: LeadsService) {
        this.leadsService.getLeads().subscribe(resp => {
            console.log(resp.response.leads);
            this.leads = resp.response.leads;
            this.numberofPages = resp.response.total;
        })
    }

    ngOnInit() {
    }

    onPager($event) {
        this.page = $event - 1
    }

    saveEmail(email) {
        console.log(email);
    }
}
