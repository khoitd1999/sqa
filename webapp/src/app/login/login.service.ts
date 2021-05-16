import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private resourceUrl = 'http://localhost:8081/api';
  constructor(
    private http: HttpClient
  ) { }

  checkUser(req): Observable<any> {
    return this.http.post(this.resourceUrl + '/check', req, { observe: 'response'});
  }

  findAll(): Observable<any> {
    return this.http.get(this.resourceUrl + '/load-all', { observe: 'response'});
  }
}
