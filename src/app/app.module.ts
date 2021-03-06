import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LandmarksComponent } from './components/landmarks/landmarks.component';
import { LandmarkItemComponent } from './components/landmark-item/landmark-item.component';
import { AppRoutingModule } from './app-routing.module';
import { LandmarkFullpageComponent } from './components/landmark-fullpage/landmark-fullpage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MapComponent } from './components/map/map.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandmarksComponent,
    LandmarkItemComponent,
    LandmarkFullpageComponent,
    NavbarComponent,
    DashboardComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
