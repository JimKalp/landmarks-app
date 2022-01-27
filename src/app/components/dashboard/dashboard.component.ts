import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Landmark } from '../../Landmark';
import { LandmarkService } from 'src/app/services/landmark.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  landmark: Landmark | undefined;
  token: string | null;

  constructor(
    private route: ActivatedRoute,
    private landmarkService: LandmarkService,
    private loginService: LoginService,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.getLandmarkById();
    this.token = localStorage.getItem('sessionToken');
  }

  getLandmarkById(): void {
    const objectId = this.route.snapshot.paramMap.get('objectId');
    if (objectId!=null){
    this.landmarkService.getLandmarkById(objectId)
      .subscribe(landmark => {this.landmark = landmark; console.log('res', landmark)});
    }
  }

  getSessionToken() {
    const token = localStorage.getItem('sessionToken');
    if (token) {
      return token;
    }
    else
      return "";
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.landmark) {
      this.landmarkService.updateLandmark(this.landmark)
        .subscribe(() => this.goBack());
    }
  }
}
