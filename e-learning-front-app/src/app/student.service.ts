import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Student } from './student';
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor(public http:HttpClient) { }

  viewAllStudent():Observable<Student[]> {
    return this.http.get<Student[]>("http://localhost:3000/api/student/findAllStudent")
  }

  signUp(student:any){
    return this.http.post("http://localhost:3000/api/student/create",student);
  }

  changePassword(student:any):Observable<any> {
    return this.http.put("http://localhost:3000/api/student/changePassword",student);
  }
}
