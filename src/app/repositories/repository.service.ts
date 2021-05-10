import { Injectable } from '@angular/core';
import { MyInfo } from '../model/myInfo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class RepositoryService {

  private heroesUrl = 'api/myinfo';  // URL to web api
  _url: string = "http://localhost:3000/api/myinfo";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) { }


  /** GET heroes from the server */
  getInfo(): Observable<MyInfo> {
    return this.http.get<MyInfo>(this._url)


  }


}
