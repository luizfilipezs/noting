import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Note } from '../models/Note';

const MOCK_NOTES: Note[] = [
  { title: 'Interview with Foxes', content: 'Watch the full interview on YouTube: https://youtu.be/2PNwo19z7oE' },
  { title: 'Five tips to become a better developer', content: 'https://blogdolipe.com.br/5-tips-to-become-a-better-developer' },
  { title: 'Good blogging platforms', content: 'Medium, Hashnode, and DEV Community' },
  { title: 'I use noting for...', content: 'Remembering articles, lessons, interviews, wislists etc.' },
];

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  apiRoot = 'http://localhost:8000/notes';

  httpOptions = {
    headers: new HttpHeaders()
  };

  constructor(private http: HttpClient) { }

  getNotes(): Observable<Note[]> {
    return of<Note[]>(MOCK_NOTES);
    //return this.http.get<Note[]>(this.apiRoot, this.httpOptions);
  }
}
