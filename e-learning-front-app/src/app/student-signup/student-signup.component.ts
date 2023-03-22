import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-signup',
  templateUrl: './student-signup.component.html',
  styleUrls: ['./student-signup.component.css']
})
export class StudentSignupComponent {
  studentRef = new FormGroup({
    fname : new FormControl(),
    lname:new FormControl(),
    gender:new FormControl(),
    graduation:new FormControl(),
    phonenumber:new FormControl(),
    emailid:new FormControl(),
    password:new FormControl(),
    typeofuser:new FormControl()
  }) 
  msg:string =""
  constructor(public ss:StudentService) {

  }
  signUp() {
    this.studentRef.get("typeofuser").setValue("student");
    let student = this.studentRef.value;
    
    console.log(student)
    this.ss.signUp(student).subscribe({
      next:(result:any)=> {
          this.msg=result.message;
      },
      error:(error:any)=> {
          console.log(error);
      },
      complete:()=>console.log('done!')
    })
    this.studentRef.reset();
  }

}
