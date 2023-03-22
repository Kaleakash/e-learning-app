import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(public router:Router){}

  facultySignUp(){
      this.router.navigate(["/FacultySignUp"]);
  }
  studentSignUp() {
      this.router.navigate(["/StudentSignUp"]);
  }
}
