import { singleComment } from './../models/singleComment.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, single } from 'rxjs';
import { CardsSearchList } from '../models/cards.search.list.model';
import { CommentSearchList } from '../models/singleComment.search.list.model';

const baseURL = 'http://localhost:3000/api/cards';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  constructor(private http: HttpClient) {}

  getCards(params?: any): Observable<CardsSearchList> {
    let queryParams = {};
    if (params) {
      queryParams = {
        params: new HttpParams()
          .set('page', params.page || '')
          .set('pageSize', params.pageSize || ''),
      };
    }

    return this.http.get(`${baseURL}`, queryParams).pipe(
      map((elem: any) => {
        return new CardsSearchList(elem);
      })
    );
  }

  getComments(commentId: number): Observable<CommentSearchList> {
    return this.http.get(`${baseURL}/${commentId}/comments`).pipe(
      map((elem: any) => {
        return new CommentSearchList(elem);
      })
    );
  }

  add(comment: singleComment): Observable<singleComment> {
    return this.http.post(`${baseURL}/${comment.cards}/comments`, comment).pipe(
      map((data: any) => {
        return new singleComment(data);
      })
    );
  }
}
