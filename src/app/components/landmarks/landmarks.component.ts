import { Component, OnInit } from '@angular/core';
import { NgImageFullscreenViewModule } from 'ng-image-fullscreen-view';
import { Landmark } from 'src/app/Landmark';
import { LandmarkService } from 'src/app/services/landmark.service';

@Component({
  selector: 'app-landmarks',
  templateUrl: './landmarks.component.html',
  styleUrls: ['./landmarks.component.css']
})
 
export class LandmarksComponent implements OnInit {
  landmarks: Landmark[] = [];
  token: string | null;

  currentIndex: any = -1;
  selectedImageIndex: number = -1;
  showFlag: any = false;

  constructor(private landmarkService: LandmarkService) { }
  
  ngOnInit(): void {
    this.landmarkService.getLandmarks().subscribe(landmarks => 
    {this.landmarks = landmarks; console.log('res', landmarks)})
    this.token = localStorage.getItem('sessionToken');
  }
  
}
