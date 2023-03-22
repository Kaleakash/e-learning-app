import { Component } from '@angular/core';
import { Relationship } from '../relationship';
import { RelationshipService } from '../relationship.service';

@Component({
  selector: 'app-view-student-request',
  templateUrl: './view-student-request.component.html',
  styleUrls: ['./view-student-request.component.css']
})
export class ViewStudentRequestComponent {

  user:any;
  courseRequest:Array<Relationship>;
  
  constructor(public rs:RelationshipService){
    let obj = JSON.parse(sessionStorage.getItem("user"));
    if(obj!=null){
      this.user = obj;
    }
  }
  ngOnInit() {
      this.viewCourseRequestByFaculty();
  }
  viewCourseRequestByFaculty() {
      this.rs.viewCourseRequestByFaculty(this.user.emailid).subscribe({
        next:(result:any)=> { 
            console.log(result);
            this.courseRequest=result.data;
        },
        error:(error:any)=>console.log(error),
        complete:()=>console.log("View All Course Details")
      })
  }

  statusUpdate(status:any,coureseRef:any){
    let courseStatus:Relationship=new Relationship();
    courseStatus.course=coureseRef.course;
    courseStatus.status=status;
    courseStatus.faculty=this.user.emailid;
    courseStatus.student=coureseRef.student;
    //console.log(courseStatus);
    this.rs.updateStudentRequestByFaculty(courseStatus).subscribe({
      next:(result:any)=> {
          console.log(result);
      },
      error:(error:any)=>console.log("Error"),
      complete:()=> {
        this.viewCourseRequestByFaculty();
      }
    })
  }
}
