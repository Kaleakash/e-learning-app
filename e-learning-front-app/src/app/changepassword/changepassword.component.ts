import { Component } from '@angular/core';
import { AdminService } from '../admin.service';
import { FacultyService } from '../faculty.service';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent {

  user?:any;
  emailid?:any;
  oldPassword:any="";
  newPassword:any="";
  oldPasswordMsg:any="";
  newPasswordMsg:any="";
  msg:string ="";
  constructor(public as:AdminService,public fs:FacultyService,public ss:StudentService){

  }
  ngOnInit(): void {
      let obj = sessionStorage.getItem("user");
      console.log(obj)
      if(obj!=null){
        this.user = JSON.parse(obj);
        this.emailid=this.user.emailid;
      }
      console.log(this.user);
  }

  oldPasswordChange(){
    if(this.oldPassword!==this.user.password){
          this.oldPasswordMsg="Plz write correct password";
    }else {
      this.oldPasswordMsg="";
    }

    
  }

  newPasswordChange(){
    if(this.newPassword.length <= 4){
      this.newPasswordMsg="Password must be min 4 character"
    }else if(this.oldPassword===this.newPassword){
      this.newPasswordMsg="Old Password and New Password must be different";
    }else {
        this.newPasswordMsg="";
    }
  }

  changePassword() {
    this.user.password= this.newPassword;
    if(this.user.typeofuser==="admin"){
      //console.log("Admin password going to change")
      this.as.changePassword(this.user).subscribe({
          next:(result:any)=> {
            //console.log(result)
            this.msg = result.message;
          },
          error:(error:any)=>console.log(error),
          complete:()=>{
            console.log("Admin password changed done successfully")
          }
      })
    }else if(this.user.typeofuser=="faculty"){
        //console.log("faculty password going to change")
        this.fs.changePassword(this.user).subscribe({
          next:(result:any)=> {
            //console.log(result)
            this.msg = result.message;
          },
          error:(error:any)=>console.log(error),
          complete:()=>{
            console.log("Admin password changed done successfully")
          }
      })
    }else if(this.user.typeofuser=="student"){
        //console.log("Student password going to change")

        this.ss.changePassword(this.user).subscribe({
          next:(result:any)=> {
            //console.log(result)
            this.msg = result.message;
          },
          error:(error:any)=>console.log(error),
          complete:()=>{
            console.log("Admin password changed done successfully")
          }
      })

    }else {

    }
  }
}
