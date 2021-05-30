import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Tag } from '../models/Tag';

const MOCK_TAGS: Tag[] = [
  { description: 'music' },
  { description: 'writing' },
  { description: 'blogging' },
  { description: 'programming' }
];

@Injectable({
  providedIn: 'root'
})
export class TagService {
  apiRoot = 'http://localhost:8000/tags';

  httpOptions = {
    headers: new HttpHeaders()
  };

  constructor(private http: HttpClient) { }

  getTags(): Observable<Tag[]> {
    return of<Tag[]>(MOCK_TAGS);
    //return this.http.get<Tag[]>(this.apiRoot, this.httpOptions);
  }
}
