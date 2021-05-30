import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ThemeSwitcher } from 'dark-theme-switcher';
import { TagsBarComponent } from '../tags-bar/tags-bar.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {

  @ViewChild('themeSwitcher') themeSwitcherButton?: ElementRef;
  @ViewChild('createNoteButton') createNoteButton?: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    this.initThemeSwitcher();
  }

  private initThemeSwitcher(): void {
    new ThemeSwitcher(this.themeSwitcherButton?.nativeElement, isDark => this.handleThemeChange(isDark)).init();
  }

  private handleThemeChange(isDark: boolean): void {
    if (this.themeSwitcherButton) {
      this.themeSwitcherButton.nativeElement.src = isDark ? 'assets/sun.svg' : 'assets/moon.svg';
    }

    if (this.createNoteButton) {
      this.createNoteButton.nativeElement.src = isDark ? 'assets/add-dark.svg' : 'assets/add.svg';
    }
  }

}
