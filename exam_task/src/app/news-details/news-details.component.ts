import { Component, Input } from '@angular/core';
import { NewsResponse, SingleNews } from '../../single-news';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-news-details',
  standalone: true,
  imports: [NgIf],
  templateUrl: './news-details.component.html',
  styleUrl: './news-details.component.css'
})
export class NewsDetailsComponent {
  ngOnInit() {}
  constructor() {}
  @Input() selectedNews? :SingleNews
}
