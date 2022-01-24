import { Component, OnInit, Input } from '@angular/core';
import { Landmark } from '../../Landmark';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { LandmarkService } from 'src/app/services/landmark.service';

@Component({
  selector: 'app-landmark-fullpage',
  templateUrl: './landmark-fullpage.component.html',
  styleUrls: ['./landmark-fullpage.component.css']
})
export class LandmarkFullpageComponent implements OnInit {
  //@Input() landmark?: Landmark;
  landmark: Landmark | undefined;

  constructor(
    private route: ActivatedRoute,
    private landmarkService: LandmarkService,
    private location: Location
  ) { }

  ngOnInit(): void {
    
  }

}