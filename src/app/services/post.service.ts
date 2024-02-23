import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  postUrl:string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  /** GET posts from the server */
  getPosts(page?: number): Observable<Post[]>{
    return this.http.get<Post[]>(this.postUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  /** GET single post by id from the server */
  getPost(id:number): Observable<Post[]> {
    return this.http.get<Post[]>(this.postUrl + '/' + id)
      .pipe(
        catchError(this.handleError)
      );
  }

  /** handle error on case of failure */
  handleError(error:any): Observable<[]> {
    alert('Error on jsonplaceholder server; see console logs.');
    console.log(error);
    return of([]); // return null to avoid breaking app
  }
}
