import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css'],
})
export class NewsItemComponent implements OnInit {
  public newsItem: any;

  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.newsService.getNewsItem(params.id).subscribe((data) => {
        console.log(data);
        this.newsItem = data;
      });
    });
  }
}
