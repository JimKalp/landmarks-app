import { Component, OnInit, Input } from '@angular/core';
import { Landmark } from '../../Landmark';

@Component({
  selector: 'app-landmark-item',
  templateUrl: './landmark-item.component.html',
  styleUrls: ['./landmark-item.component.css']
})
export class LandmarkItemComponent implements OnInit {
  @Input() landmark: Landmark
  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
