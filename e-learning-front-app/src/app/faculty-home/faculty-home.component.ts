import { Component } from '@angular/core';

@Component({
  selector: 'app-faculty-home',
  templateUrl: './faculty-home.component.html',
  styleUrls: ['./faculty-home.component.css']
})
export class FacultyHomeComponent {

  faculty?:any;
  constructor(){

  }
  ngOnInit(): void {
      let obj = sessionStorage.getItem("user");
      if(obj!=null){
        this.faculty = JSON.parse(obj);
      }
  }
}
