import { Component } from '@angular/core';
import { Course, CourseChapter } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-view-own-course',
  templateUrl: './view-own-course.component.html',
  styleUrls: ['./view-own-course.component.css']
})
export class ViewOwnCourseComponent {

  flag:boolean = false;
  courses:Array<Course>=[];
  chapterDetails:Array<CourseChapter>=[];
  emailid?:string;
  constructor(public cs:CourseService){

  }
  ngOnInit(): void {
    let obj = JSON.parse(sessionStorage.getItem("user"));
    if(obj!=null){
      this.emailid = obj.emailid;
    }
    this.loadAllCourseDetails();
  }
  loadAllCourseDetails() {
    this.cs.viewApprovedCourse(this.emailid).subscribe({
      next:(result:any)=> {
            this.courses=result.data;
      },
      error:(error:any)=>console.log(error),
      complete:()=>console.log("loaded course details")
    });
  }

  viewCourseDetails(coursename:any) {
  this.flag=true;
  this.courses.filter(c=>c.coursename==coursename).forEach((c)=> {
    if(c.chapters!=null){
      this.chapterDetails=c.chapters;
    }
  })
  }
}
