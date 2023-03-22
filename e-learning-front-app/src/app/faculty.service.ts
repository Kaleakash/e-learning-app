import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import { Faculty } from './faculty';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {

  constructor(public http:HttpClient) { }

  viewAllFaculty():Observable<Faculty[]> {
    return this.http.get<Faculty[]>("http://localhost:3000/api/faculty/findAllFaculty")
  }

  signUp(faculty:any){
    return this.http.post("http://localhost:3000/api/faculty/create",faculty);
  }


  changePassword(faculty:any):Observable<any> {
    return this.http.put("http://localhost:3000/api/faculty/changePassword",faculty);
  }
  
}
