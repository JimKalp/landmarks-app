import { Component, OnInit } from '@angular/core';
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

  currentlandmark: Landmark;

  constructor(private landmarkService: LandmarkService) { }
  
  ngOnInit(): void {
    this.landmarkService.getLandmarks().subscribe(landmarks => 
    {this.landmarks = landmarks; this.currentlandmark = landmarks[0]; console.log('res', landmarks)}) 
    this.token = localStorage.getItem('sessionToken');
  }

  openModal(landmark: Landmark) {
    this.currentlandmark = landmark;
    document.getElementById('modal')!.style.display = "block";
  }

  closeModal() {
    document.getElementById('modal')!.style.display = "none";
  }

}
