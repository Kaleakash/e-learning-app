import { Component } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../course.service';
import { Relationship } from '../relationship';
import { RelationshipService } from '../relationship.service';

@Component({
  selector: 'app-view-course-by-student',
  templateUrl: './view-course-by-student.component.html',
  styleUrls: ['./view-course-by-student.component.css']
})
export class ViewCourseByStudentComponent {
  user:any;
  courses:Array<Course>=[];
  relationship:Array<Relationship>=[];
  constructor(public cs:CourseService,public rs:RelationshipService){
      let obj = JSON.parse(sessionStorage.getItem("user"));
      if(obj!=null){
        this.user = obj;
      }
  }

  ngOnInit(): void {
    this.loadAllCourseDetails();
  }
  loadAllCourseDetails() {
    console.log(this.user.emailid);
    this.rs.viewRequestByStudent(this.user.emailid).subscribe({
      next:(result:any)=> {
            this.relationship=result.data;
            console.log(result)
      },
      error:(error:any)=>console.log(error),
      complete:()=>{
        console.log("Relationship record got");

        this.cs.viewAllCourse().subscribe({
          next:(result:any)=> {
                this.courses=result.data;
                
          },
          error:(error:any)=>console.log(error),
          complete:()=>console.log("loaded course details")
        });

      }
    })
    
  }

  requestCourse(coursename:any){
    let courserequest:Relationship=new Relationship();
    courserequest.course=coursename;
    courserequest.student=this.user.emailid;
    let result = this.relationship.find(e=>e.course==coursename);
  //  alert(result);
  if(result!=undefined){
    alert("Request already sent")
  }else {
    this.rs.requestForCourse(courserequest).subscribe({
      next:(result:any)=>{
          console.log(result)
      },
      error:(error:any)=>console.log(error),
      complete:()=>{
        console.log("request for course sent");
        alert("Request sent")
      }
    })
  }
  }
  
}
