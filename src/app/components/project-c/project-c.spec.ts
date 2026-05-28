import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectC } from './project-c';

describe('ProjectC', () => {
  let component: ProjectC;
  let fixture: ComponentFixture<ProjectC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectC],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectC);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
