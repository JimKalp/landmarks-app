import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandmarksComponent } from './components/landmarks/landmarks.component';
import { LandmarkFullpageComponent } from './components/landmark-fullpage/landmark-fullpage.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/landmarks', pathMatch: 'full'},
  { path: 'landmarks', component: LandmarksComponent },
  { path: 'landmarks/:objectId', component: LandmarkFullpageComponent },
  { path: 'dashboard/:objectId', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
