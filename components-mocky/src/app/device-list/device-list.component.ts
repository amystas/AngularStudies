import { NgFor } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Smartphone } from '../models/smartphone';

@Component({
  selector: 'app-device-list',
  standalone: true,
  imports: [NgFor, HttpClientModule],
  templateUrl: './device-list.component.html',
  styleUrl: './device-list.component.css'
})
export class DeviceListComponent {
  smartphoneList :Smartphone[] = []

  url = 'https://run.mocky.io/v3/119c9fae-5dcc-4f63-ad1c-3b43aaa831bf';
  constructor(private HttpClient: HttpClient) {
    this.HttpClient.get(this.url).subscribe((data: Smartphone[]) => {
      this.smartphoneList = data
    });
  }
  Sos,Ciuchy i Borciuchy
  ngOnInit() {}

  @Output() smartphoneSelected = new EventEmitter<Smartphone[]>();
  smartphoneArray: Smartphone[] = [];

  onSelect(smartphone: Smartphone): void {
    this.smartphoneArray.push(smartphone);
    this.smartphoneSelected.emit(this.smartphoneArray);
    console.log(this.smartphoneArray)
  }
}
