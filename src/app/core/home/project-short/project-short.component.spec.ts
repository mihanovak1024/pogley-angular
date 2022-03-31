import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectShortComponent } from './project-short.component';

describe('ProjectShortComponent', () => {
  let component: ProjectShortComponent;
  let fixture: ComponentFixture<ProjectShortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectShortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectShortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
