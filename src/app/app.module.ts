import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { LandmarksComponent } from './components/landmarks/landmarks.component';
import { LandmarkItemComponent } from './components/landmark-item/landmark-item.component';
import { AppRoutingModule } from './app-routing.module';
import { LandmarkFullpageComponent } from './components/landmark-fullpage/landmark-fullpage.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    LandmarksComponent,
    LandmarkItemComponent,
    LandmarkFullpageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
