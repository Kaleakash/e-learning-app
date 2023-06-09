import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStudentRequestComponent } from './view-student-request.component';

describe('ViewStudentRequestComponent', () => {
  let component: ViewStudentRequestComponent;
  let fixture: ComponentFixture<ViewStudentRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewStudentRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewStudentRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
