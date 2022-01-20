import { Component, OnInit } from '@angular/core';
import { Landmark } from 'src/app/Landmark';
import { LandmarkService } from 'src/app/services/landmark.service';

@Component({
  selector: 'app-landmarks',
  templateUrl: './landmarks.component.html',
  styleUrls: ['./landmarks.component.css']
})
export class LandmarksComponent implements OnInit {
  
  constructor(private landmarkService: LandmarkService) { }

  ngOnInit(): void {
    this.landmarkService.getLandmarks().subscribe((landmarks: Landmark[]) => console.log('res', landmarks))
    
  }

}
