import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {
  
  courseRef: FormGroup;
  constructor(private fb: FormBuilder,private cs:CourseService) {
    this.courseRef = this.fb.group({
    coursename:[null],
    chapters: this.fb.array([])
    })
  }
  get chapters() {
    return this.courseRef.get('chapters') as FormArray;
  }
  createChapter(): FormGroup {
    return this.fb.group({
      chapterNumber: new FormControl(""), 
      topic: new FormControl(""),
      topicContents: new FormControl(""), 
    });
  }
  message:string="";
   addChapter() {
    this.chapters.push(this.createChapter());
    console.log(this.chapters)
  }
  removeUser(index: number) {
    this.chapters.removeAt(index);
    console.log(this.chapters.value);
  } 

  addCourse(){
    let course = this.courseRef.value;
    this.cs.addCourse(course).subscribe({
      next:(result:any)=> {
         // console.log(result);
         this.message=result.message;
      },
      error:(error:any)=>console.log(error),
      complete:()=>console.log("course added..")
    })
    console.log(course);
    this.courseRef.reset();
    this.chapters.clear();
  }
}
