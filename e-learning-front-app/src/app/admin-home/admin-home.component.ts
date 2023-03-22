import { Component,OnInit } from '@angular/core';
import { Faculty } from '../faculty';
import { FacultyService } from '../faculty.service';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit{
  admin?:any;
  
  constructor(public fs:FacultyService,public ss:StudentService){

  }
  ngOnInit(): void {
      let obj = sessionStorage.getItem("user");
      if(obj!=null){
        this.admin = JSON.parse(obj);
      }
  }

  // loadAllStudentDetails() {
  //   console.log("event fired");
  //   this.ss.viewAllStudent().subscribe({
  //     next:(result:any)=> {
  //           this.students=result;
  //     },
  //     error:(error:any)=>console.log(error),
  //     complete:()=>console.log("loaded student details")
  //   });

  // }
  
}
