import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DashboardContainerComponent } from './dashboard/dashboard-container/dashboard-container.component';
import { AppRoutingModule } from './app-routing.module';
import { SlickModule } from 'ngx-slick';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { ColorPickerModule } from 'ngx-color-picker';
import { FormWizardModule } from 'angular2-wizard';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { DndModule } from 'ng2-dnd';
import { TreeviewModule } from 'ngx-treeview';
// import { InputEditorModule } from 'angular-inline-editors';
// import { SelectEditorModule } from 'angular-inline-editors';

import { NavbarContainerComponent } from './navbar/navbar-container/navbar-container.component';
import { PipelineContainerComponent } from './pipeline/pipeline-container/pipeline-container.component';
import { TeamsContainerComponent } from './teams/teams-container/teams-container.component';
import { ProductsComponentComponent } from './products/products-component/products-component.component';
import { LeadsComponentComponent } from './leads/leads-component/leads-component.component';
import { DashboardSlickComponent } from './dashboard/dashboard-slick/dashboard-slick.component';
import { DashboardCardComponent } from './dashboard/dashboard-card/dashboard-card.component';
import { DashboardServiceService } from './dashboard/dashboard-service.service';
import { ProductCardComponent } from './products/product-card/product-card.component';
import { ProductService } from './products/service/product.service';
import { ProductsExpandedComponent } from './products/products-expanded/products-expanded.component';
import { ProductSwitchcaseComponent } from './products/product-switchcase/product-switchcase.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { TeamsCreateComponent } from './teams/teams-create/teams-create.component';
import { TeamsService } from './teams/service/teams.service';
import { TeamsCardComponent } from './teams/teams-card/teams-card.component';
import { ProductModalComponent } from './products/product-modal/product-modal.component';
import { LeadCardsComponent } from './leads/lead-cards/lead-cards.component';
import { DragndropComponent } from './dragndrop/dragndrop/dragndrop.component';
import { assertDataInRangeInternal } from '@angular/core/src/render3/util';
import { TreeviewcomponentComponent } from './treeviewcomponent/treeviewcomponent.component';




@NgModule({
    declarations: [
        AppComponent,
        DashboardContainerComponent,
        NavbarContainerComponent,
        PipelineContainerComponent,
        TeamsContainerComponent,
        ProductsComponentComponent,
        LeadsComponentComponent,
        DashboardSlickComponent,
        DashboardCardComponent,
        ProductCardComponent,
        ProductsExpandedComponent,
        ProductSwitchcaseComponent,
        TestComponent,
        Test2Component,
        TeamsCreateComponent,
        TeamsCardComponent,
        ProductModalComponent,
        LeadCardsComponent,
        DragndropComponent,
        TreeviewcomponentComponent,



    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SlickModule.forRoot(),
        HttpClientModule,
        NgbModule,
        FormsModule,
        ReactiveFormsModule,
        NgSelectModule,
        FormWizardModule,
        ColorPickerModule,
        SweetAlert2Module.forRoot(),
        // InputEditorModule.forRoot(),
        // SelectEditorModule.forRoot(),
        DndModule.forRoot(),
        TreeviewModule.forRoot()


    ],

    entryComponents: [ProductModalComponent],
    providers: [DashboardServiceService, ProductService, TeamsService],
    bootstrap: [AppComponent]
})
export class AppModule { }
