import { Component, OnInit } from '@angular/core';
import { Note } from '../models/Note';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-notes-wrapper',
  templateUrl: './notes-wrapper.component.html',
  styleUrls: ['./notes-wrapper.component.scss']
})
export class NotesWrapperComponent implements OnInit {

  notes: Note[] = [];

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.loadNotes();
  }

  private loadNotes(): void {
    this.noteService.getNotes().subscribe(notes => this.notes = notes);
  }

}
