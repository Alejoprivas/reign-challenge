import { Component, OnInit } from '@angular/core';
import {News} from "src/app/models/news";
import {NewsService} from "src/app/core/services/news-service.service"


@Component({
  selector: 'app-newslist',
  templateUrl: './newslist.component.html',
  styleUrls: ['./newslist.component.sass']
})
export class NewslistComponent implements OnInit {

  news: News;
  newslist: Array<News> = [];
  constructor(
    private newsService: NewsService,
  ) { 

  }

  ngOnInit() {
    this.getAll()
  }
  openNews(url){
    console.log(url)
    //window.open(url, "_blank");
  }
  deleteNews(url){
    
    //window.open(url, "_blank");
  }
  getAll(): void {
    this.news = new News(null,null,null,null);
    this.newsService.getAllNews().subscribe(newslist => {
      this.newslist = newslist;
      console.log(newslist);
    });
  }
}
