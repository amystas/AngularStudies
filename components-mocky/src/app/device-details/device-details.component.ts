import { NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Smartphone } from '../models/smartphone';

@Component({
  selector: 'app-device-details',
  standalone: true,
  imports: [NgFor],
  templateUrl: './device-details.component.html',
  styleUrl: './device-details.component.css'
})
export class DeviceDetailsComponent {
  @Input() smartphoneArray?: Smartphone[];
  constructor(){}
  ngOnInit() {console.log(this.smartphoneArray)}
}
