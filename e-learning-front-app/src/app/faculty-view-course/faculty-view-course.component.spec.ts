import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyViewCourseComponent } from './faculty-view-course.component';

describe('FacultyViewCourseComponent', () => {
  let component: FacultyViewCourseComponent;
  let fixture: ComponentFixture<FacultyViewCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyViewCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacultyViewCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
