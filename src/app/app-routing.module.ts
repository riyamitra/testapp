import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardContainerComponent } from './dashboard/dashboard-container/dashboard-container.component';
import { PipelineContainerComponent } from './pipeline/pipeline-container/pipeline-container.component';
import { TeamsContainerComponent } from './teams/teams-container/teams-container.component';
import { ProductsComponentComponent } from './products/products-component/products-component.component';
import { LeadsComponentComponent } from './leads/leads-component/leads-component.component';
import { TeamsCreateComponent } from './teams/teams-create/teams-create.component';

const routes: Routes = [
  { path: '', redirectTo: 'pipeline', pathMatch: 'full' },
  { path: 'pipeline', component: PipelineContainerComponent },
  { path: 'teams', component: TeamsContainerComponent },
  { path: 'createteams', component: TeamsCreateComponent },
  { path: 'products', component: ProductsComponentComponent },
  { path: 'leads', component: LeadsComponentComponent }

];


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }