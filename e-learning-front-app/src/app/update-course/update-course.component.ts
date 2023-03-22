import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css']
})
export class UpdateCourseComponent {
  courses:Array<Course>=[];
  
  courseRef?: FormGroup;
  constructor(private fb: FormBuilder,private cs:CourseService) {
    this.courseRef = this.fb.group({
    chapters: this.fb.array([])
    })
  }
  emailid?:string;
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
    this.cs.viewCourseByFaculty(this.emailid).subscribe({
      next:(result:any)=> {
            this.courses=result.data;
      },
      error:(error:any)=>console.log(error),
      complete:()=>{
        let selectCourse = new Course("");
        selectCourse.coursename="--select course--";
        this.courses.unshift(selectCourse);
      }
    });
  }
  filterCourse:Array<Course>;
  selectedCourse(coursename){
    console.log(coursename)
    this.flag=true;
    this.filterCourse = this.courses.filter(c=>c.coursename==coursename);
   console.log(this.filterCourse)
   console.log(this.courseRef)
  }

  flag:boolean = false;

  get chapters() {
    return this.courseRef.get('chapters') as FormArray;
  }

  get course() {
    return this.courseRef as FormGroup;
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

  updateCourse(){
    console.log(this.filterCourse);
    console.log(this.courseRef.value);
    let updatedCourse = this.courseRef.value;
    console.log(updatedCourse.chapters.length);
    this.filterCourse[0]["chapters"]=JSON.parse(JSON.stringify(updatedCourse.chapters));

    console.log(this.filterCourse[0]);
    this.cs.addChapter(this.filterCourse[0]).subscribe({
      next:(result:any)=> {
          console.log(result)
      },
      error:(error:any)=>console.log(error),
      complete:()=>{
        console.log("done!");
        this.courseRef.reset();        
      }
    })
  }
}
