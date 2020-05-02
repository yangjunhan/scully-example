import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private http: HttpClient) {}

  getAllNews() {
    return this.http.get('../assets/news.json');
  }

  getNewsItem(id: String) {
    console.log(id);
    return this.http
      .get('../assets/news.json')
      .pipe(map((result: any) => result.find((data) => data.id == id)));
  }
}
