import { Component, Input, OnInit } from '@angular/core';
import { Loader } from "@googlemaps/js-api-loader";
import { LandmarkService } from 'src/app/services/landmark.service';
import { Landmark } from 'src/app/Landmark';
import { LandmarksComponent } from '../landmarks/landmarks.component';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  landmark: Landmark | undefined;
  @Input() location: any;

  constructor(private landmarkService: LandmarkService) { }

  ngOnInit(): void {
    //this.initMap();
    
    const loader = new Loader({
      apiKey: "AIzaSyDaamDZGsY6ljXmzzzQfYhkQDcKx6cYny0",
      version: "weekly",
    });
    
    loader.load().then(() => {
      const map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
        center: { lat: this.location.lat, lng: this.location.lng },
        zoom: 8,
      });
      new google.maps.Marker({
        position: this.location,
        map,
        title: "Hello World!",
      });
    });
    
  }

  // Initialize and add the map
  /*
  initMap(): void {

    const uluru = { lat: -25.344, lng: 131.036 };
    // The map, centered at Uluru
    const map = new google.maps.Map(
      document.getElementById("map") as HTMLElement,
      {
        zoom: 4,
        center: uluru,
      }
    );

    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }*/
}
