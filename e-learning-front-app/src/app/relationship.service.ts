import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Relationship } from './relationship';

@Injectable({
  providedIn: 'root'
})
export class RelationshipService {

  constructor(public http:HttpClient) { }

  requestForCourse(courserequest:any):Observable<string> {
    return this.http.post("http://localhost:3000/api/scfrelationship/requestForCourse",courserequest,{responseType:'text'})
  }

  viewRequestByStudent(student:any):Observable<Relationship[]> {
    return this.http.get<Relationship[]>("http://localhost:3000/api/scfrelationship/viewCourseRequest/"+student)
  }

  viewCourseRequestByFaculty(faculty:any):Observable<Relationship[]> {
    return this.http.get<Relationship[]>("http://localhost:3000/api/scfrelationship/viewCourseRequestByFaculty/"+faculty)
  }

  updateStudentRequestByFaculty(courseStatus:any):Observable<any> {
    return this.http.put("http://localhost:3000/api/scfrelationship/updateRequestByFaculty",courseStatus,{responseType:'text'})
  }

}
