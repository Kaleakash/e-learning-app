import { Component } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent {

  students:Array<Student>=[];
  constructor(public ss:StudentService){

  }
  ngOnInit(): void {
    this.loadAllStudentDetails();
  }
  loadAllStudentDetails() {
    console.log("event fired");
    this.ss.viewAllStudent().subscribe({
      next:(result:any)=> {
            this.students=result.data;
      },
      error:(error:any)=>console.log(error),
      complete:()=>console.log("loaded student details")
    });
  }
}
