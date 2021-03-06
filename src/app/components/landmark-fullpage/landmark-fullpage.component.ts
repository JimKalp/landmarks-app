import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Landmark } from '../../Landmark';
import { LandmarkService } from 'src/app/services/landmark.service';


@Component({
  selector: 'app-landmark-fullpage',
  templateUrl: './landmark-fullpage.component.html',
  styleUrls: ['./landmark-fullpage.component.css']
})
export class LandmarkFullpageComponent implements OnInit {
  
  landmark: Landmark | undefined;

  constructor(
    private route: ActivatedRoute,
    private landmarkService: LandmarkService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getLandmarkById();
  }

  getLandmarkById(): void {
    const objectId = this.route.snapshot.paramMap.get('objectId');
    if (objectId!=null){
    this.landmarkService.getLandmarkById(objectId)
      .subscribe(landmark => {this.landmark = landmark; console.log('res', landmark)});
    }
  }

  goBack(): void {
    this.location.back();
  }
}
