import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { NewsResponse, SingleNews } from '../../single-news';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-news-list',
  standalone: true,
  imports: [HttpClientModule, NgFor],
  templateUrl: './news-list.component.html',
  styleUrl: './news-list.component.css'
})
export class NewsListComponent {
  url = "https://run.mocky.io/v3/93deb50f-6548-48e2-9da7-457b1a324a92";
  newsList :SingleNews[] = []
  constructor(private HttpClient :HttpClient) {
    this.HttpClient.get(this.url).subscribe((data :NewsResponse) => {
      this.newsList = data.news;
    });
  }

  ngOnInit() {}
  @Output() newsSelected = new EventEmitter<SingleNews>()
  onSelect(selectedNews :SingleNews) :void {
    this.newsSelected.emit(selectedNews);
  }

}
