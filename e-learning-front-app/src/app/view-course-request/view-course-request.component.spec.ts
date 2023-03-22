import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCourseRequestComponent } from './view-course-request.component';

describe('ViewCourseRequestComponent', () => {
  let component: ViewCourseRequestComponent;
  let fixture: ComponentFixture<ViewCourseRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCourseRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCourseRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
