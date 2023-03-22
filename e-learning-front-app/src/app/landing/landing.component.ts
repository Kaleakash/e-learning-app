import { ViewEncapsulation } from '@angular/compiler';
import { Component,OnInit,ViewChildren} from '@angular/core';
import { AdminHomeComponent } from '../admin-home/admin-home.component';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  @ViewChildren(AdminHomeComponent)
  adminHome?:AdminHomeComponent;
   menu:number =1;
  constructor(public gs:GlobalService){
    //console.log(this.menu=='main')
    this.gs.getObservable().subscribe({
      next:(result)=> {
        if(result=="admin"){
          this.menu = 2;
        }else if(result=="student"){
          this.menu =3;
        }else if(result=="faculty"){
          this.menu = 4;
        }else {
          this.menu = 1;
        }
      }
    })
  }
  
  ngOnInit() {

  }

  loadAllStudentDetails() {
    console.log("called.")
    //this.adminHome?.loadAllStudentDetails();
  }
  loadAllFacultyDetails() {
    //this.adminHome?.loadAllFacultyDetails();
  }
}
