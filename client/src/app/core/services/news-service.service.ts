import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable,Subject} from "rxjs";
import {map} from "rxjs/operators";

import {News} from "../../models/news"; 
import { environment as config } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }
  public personas: Subject<News>;
  contextUrl: string = config.apiUrl;

  getAllNews(): Observable<News[]> {
    return this.http.get<News[]>(`${this.contextUrl}/news`)
    .pipe(map(data => data));
  }
  deleteNews(id: string): Observable<void> {
    return this.http.delete<void>(`${this.contextUrl}/news/delete/` + id)
    .pipe(map(data => data));
  }
}
