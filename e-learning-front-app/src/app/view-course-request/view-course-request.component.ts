import { Component, OnInit } from '@angular/core';
import { Relationship } from '../relationship';
import { RelationshipService } from '../relationship.service';

@Component({
  selector: 'app-view-course-request',
  templateUrl: './view-course-request.component.html',
  styleUrls: ['./view-course-request.component.css']
})
export class ViewCourseRequestComponent implements OnInit{
  user:any;
  courseRequest:Array<Relationship>;
  
  constructor(public rs:RelationshipService){
    let obj = JSON.parse(sessionStorage.getItem("user"));
    if(obj!=null){
      this.user = obj;
    }
  }
  ngOnInit() {
      this.viewCourseRequest();
  }
  viewCourseRequest() {
      this.rs.viewRequestByStudent(this.user.emailid).subscribe({
        next:(result:any)=> {
            console.log(result);
            this.courseRequest=result.data;
        },
        error:(error:any)=>console.log(error),
        complete:()=>console.log("View All Course Details")
      })
  }
}
