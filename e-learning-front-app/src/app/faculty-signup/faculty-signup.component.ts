import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FacultyService } from '../faculty.service';

@Component({
  selector: 'app-faculty-signup',
  templateUrl: './faculty-signup.component.html',
  styleUrls: ['./faculty-signup.component.css']
})
export class FacultySignupComponent {

  facultyRef = new FormGroup({
    fname : new FormControl(),
    lname:new FormControl(),
    gender:new FormControl(),
    technologies:new FormControl(),
    phonenumber:new FormControl(),
    emailid:new FormControl(),
    password:new FormControl(),
    typeofuser:new FormControl()
  }) 
  msg:string =""
  constructor(public fs:FacultyService) {

  }
  signUp() {
    this.facultyRef.get("typeofuser").setValue("faculty");
    let faculty = this.facultyRef.value;
    faculty.technologies=faculty.technologies.split(",");
    console.log(faculty)
    this.fs.signUp(faculty).subscribe({
      next:(result:any)=> {
          this.msg=result.message;
      },
      error:(error:any)=> {
          console.log(error);
      },
      complete:()=>console.log('done!')
    })
    this.facultyRef.reset();
  }
}
