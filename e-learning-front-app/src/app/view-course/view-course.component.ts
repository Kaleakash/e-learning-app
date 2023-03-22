import { Component } from '@angular/core';
import { Course,CourseChapter } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css']
})
export class ViewCourseComponent {
  // flag:boolean = false;
  // courses:Array<Course>=[];
  // chapterDetails:Array<CourseChapter>=[];
  // constructor(public cs:CourseService){

  // }
  // ngOnInit(): void {
  //   this.loadAllCourseDetails();
  // }
  // loadAllCourseDetails() {
  //   console.log("event fired");
  //   this.cs.viewAllCourse().subscribe({
  //     next:(result:any)=> {
  //           this.courses=result.data;
  //     },
  //     error:(error:any)=>console.log(error),
  //     complete:()=>console.log("loaded course details")
  //   });
  // }

  // viewCourseDetails(coursename:any) {
  // this.flag=true;
  // this.courses.filter(c=>c.coursename==coursename).forEach((c)=> {
  //   if(c.chapters!=null){
  //     this.chapterDetails=c.chapters;
  //   }
  // })
  // }

    flag:boolean = false;
  courses:Array<Course>=[];
  chapterDetails:Array<CourseChapter>=[];
  emailid?:string;
  constructor(public cs:CourseService){

  }
  ngOnInit(): void {
    let obj = JSON.parse(sessionStorage.getItem("user"));
    if(obj!=null){
      //console.log(obj);
      this.emailid = obj.emailid;
    }
    this.loadAllCourseDetails();
  }
  loadAllCourseDetails() {
    console.log("event fired");
    this.cs.viewAllCourse().subscribe({
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

  deleteCourse(cc:any){
    //console.log(cc._id);
    this.cs.deleteCouseById(cc._id).subscribe({
      next:(result:any)=> {
        console.log(result);
      },
      error:(error:any)=> {
        console.log(error)
      },
      complete:()=>{
        console.log("course deleted")
        this.loadAllCourseDetails();
      }
    })
  }

}
