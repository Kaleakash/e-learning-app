import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService } from '../global.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginRef = new FormGroup({
    emailid:new FormControl(),
    password:new FormControl(),
    typeofuser:new FormControl()
  });

  constructor(public ls:LoginService,
    public gs:GlobalService,
    public router:Router){

  }
  
  signIn(){
    let login = this.loginRef.value;
    this.ls.signIn(login).subscribe({
      next:(result:any)=>{
        alert(result.message);
        sessionStorage.setItem("user",JSON.stringify(result.data));
       if(result.message=="Succesfully login by Admin!"){
          this.gs.changeObservable("admin");
          console.log("admin done login")
          this.router.navigate(["adminHome"]);
       }else if(result.message=="Succesfully login by Faculty!"){
        this.gs.changeObservable("faculty");
        console.log("faculty done login")
        this.router.navigate(["facultyHome"]);
       }else if(result.message=="Succesfully login by Student!"){
        this.gs.changeObservable("student");
        console.log("student done login")
        this.router.navigate(["studentHome"]);
       }else {
          console.log("error");
       }
      },
      error:(error:any)=>console.log(error),
      complete:()=>console.log("login done!")
    }); 

    console.log(login);

    this.loginRef.reset();
  }
}
