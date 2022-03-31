import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-short',
  templateUrl: './project-short.component.html',
  styleUrls: ['./project-short.component.css'],
})
export class ProjectShortComponent implements OnInit {
  @Input() project?: { id: number; name: string; description: string };

  constructor() {}

  ngOnInit(): void {}
}
