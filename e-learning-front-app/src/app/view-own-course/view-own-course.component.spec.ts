import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOwnCourseComponent } from './view-own-course.component';

describe('ViewOwnCourseComponent', () => {
  let component: ViewOwnCourseComponent;
  let fixture: ComponentFixture<ViewOwnCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewOwnCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewOwnCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
