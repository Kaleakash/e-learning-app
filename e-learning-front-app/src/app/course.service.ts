import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Student } from './student';
import { Course } from './course';
@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(public http:HttpClient) { }

  viewAllCourse():Observable<Course[]> {
    return this.http.get<Course[]>("http://localhost:3000/api/course/view");
  }

  viewCourseByFaculty(emailid:any):Observable<Course[]> {
      return this.http.get<Course[]>("http://localhost:3000/api/course/findCourseByFaculty/"+emailid);
  }
  deleteCouseById(cid:any):Observable<string> {
    return this.http.delete("http://localhost:3000/api/course/deleteCourseById/"+cid,{responseType:'text'});
  }

  addCourse(course:any):Observable<string>{
    return this.http.post("http://localhost:3000/api/course/create",course,{responseType:'text'});
  }

  addChapter(course:any):Observable<string>{
    return this.http.put("http://localhost:3000/api/course/addChapter",course,{responseType:'text'});
  }

  viewApprovedCourse(studentEmailid:any):Observable<Course[]>{
    return this.http.get<Course[]>("http://localhost:3000/api/course/viewCourseByStudent/"+studentEmailid);
  }
}
