import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsBarComponent } from './tags-bar.component';

describe('TagsBarComponent', () => {
  let component: TagsBarComponent;
  let fixture: ComponentFixture<TagsBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagsBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TagsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
