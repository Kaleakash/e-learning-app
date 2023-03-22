import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCourseByStudentComponent } from './view-course-by-student.component';

describe('ViewCourseByStudentComponent', () => {
  let component: ViewCourseByStudentComponent;
  let fixture: ComponentFixture<ViewCourseByStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCourseByStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCourseByStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
