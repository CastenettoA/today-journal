import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  postUrl:string = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  /** GET users from the server */
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.postUrl)
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
