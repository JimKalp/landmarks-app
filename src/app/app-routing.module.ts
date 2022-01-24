import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandmarksComponent } from './components/landmarks/landmarks.component';

const routes: Routes = [
  { path: '', redirectTo: '/landmarks', pathMatch: 'full'},
  { path: 'landmarks', component: LandmarksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
