import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(public http:HttpClient) { }

  changePassword(admin):Observable<any> {
    return this.http.put("http://localhost:3000/api/admin/changePassword",admin);
  }
}
