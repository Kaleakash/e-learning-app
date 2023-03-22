import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public http:HttpClient) { }

  signIn(login:any):Observable<any> {
    
    if(login.typeofuser=="admin"){
      return this.http.post("http://localhost:3000/api/admin/login",login);
    }else if(login.typeofuser=="faculty"){
      return this.http.post("http://localhost:3000/api/faculty/login",login);
    }else if(login.typeofuser=="student"){
      return this.http.post("http://localhost:3000/api/student/login",login);
    }else {
        return Observable.create("plz select type of user");
    }
  }
}
