import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project } from '../../project/project-data.model';

@Component({
  selector: 'app-project-short',
  templateUrl: './project-short.component.html',
})
export class ProjectShortComponent implements OnInit {
  @Input() project?: { id: number; name: string; description: string };
  @Output() projectClicked = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  onProjectClicked() {
    console.log("clicked");
    this.projectClicked.emit();
  }
}
