import { Component, OnInit, Input } from '@angular/core';
import { Landmark } from '../../Landmark';

@Component({
  selector: 'app-landmark-fullpage',
  templateUrl: './landmark-fullpage.component.html',
  styleUrls: ['./landmark-fullpage.component.css']
})
export class LandmarkFullpageComponent implements OnInit {
  @Input() landmark?: Landmark;

  constructor() { }

  ngOnInit(): void {
  }

}
