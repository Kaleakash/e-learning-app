import { Component ,OnInit} from '@angular/core';
import { Faculty } from '../faculty';
import { FacultyService } from '../faculty.service';

@Component({
  selector: 'app-view-faculty',
  templateUrl: './view-faculty.component.html',
  styleUrls: ['./view-faculty.component.css']
})
export class ViewFacultyComponent implements OnInit{

  faculties:Array<Faculty>=[];
  constructor(public fs:FacultyService){

  }
  ngOnInit(): void {
    this.loadAllFacultyDetails();
  }
  loadAllFacultyDetails() {
    console.log("event fired");
    this.fs.viewAllFaculty().subscribe({
      next:(result:any)=> {
            this.faculties=result.data;
      },
      error:(error:any)=>console.log(error),
      complete:()=>console.log("loaded student details")
    });
  }
}
