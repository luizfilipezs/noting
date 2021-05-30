import { Component, OnInit } from '@angular/core';
import { Tag } from '../models/Tag';
import { TagService } from '../services/tag.service';

@Component({
  selector: 'app-tags-bar',
  templateUrl: './tags-bar.component.html',
  styleUrls: ['./tags-bar.component.scss']
})
export class TagsBarComponent implements OnInit {

  tags: Tag[] = [];

  constructor(private tagService: TagService) { }

  ngOnInit(): void {
    this.loadTags();
  }

  private loadTags() {
    this.tagService.getTags().subscribe(tags => this.tags = tags);
  }

}
