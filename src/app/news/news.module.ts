import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';
import { NewsItemComponent } from '../news-item/news-item.component';


@NgModule({
  declarations: [NewsComponent, NewsItemComponent],
  imports: [
    CommonModule,
    NewsRoutingModule
  ]
})
export class NewsModule { }
