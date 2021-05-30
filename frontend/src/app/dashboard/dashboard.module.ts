import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { TagsBarComponent } from './tags-bar/tags-bar.component';
import { TagComponent } from './tag/tag.component';
import { NotesWrapperComponent } from './notes-wrapper/notes-wrapper.component';



@NgModule({
  declarations: [
    DashboardComponent,
    TagsBarComponent,
    TagComponent,
    NotesWrapperComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
  ]
})
export class DashboardModule { }
