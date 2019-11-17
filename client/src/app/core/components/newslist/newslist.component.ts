import { Component, OnInit } from '@angular/core';
import {News} from "src/app/models/news";
import {NewsService} from "src/app/core/services/news-service.service"

//https://medium.com/@thunderroid/angular-date-ago-pipe-minutes-hours-days-months-years-ago-c4b5efae5fe5
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
    window.open(url, "_blank");
  }
  deleteNews(id){
    console.log(id)
    this.newsService.deleteNews(id).subscribe((data) =>{ 
      this.getAll();
    }); 
  }
  getAll(): void { 
    this.newsService.getAllNews().subscribe(newslist => {
      this.newslist = newslist; 
    });
  }
}
