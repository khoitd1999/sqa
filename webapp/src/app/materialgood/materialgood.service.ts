import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MaterialgoodService {
  private resourceUrl = 'http://localhost:8081/api/material';
  constructor(
    private http: HttpClient
  ) { }

  loadAll(req?): Observable<any> {
    return this.http.get<any>(this.resourceUrl + '/load-all?page=' + req.page + '&size=' + req.size, { observe: 'response' });
  }

  save(req?): Observable<any> {
    return this.http.post<any>(this.resourceUrl + '/save', req, { observe: 'response' });
  }

  find(req?): Observable<any> {
    return this.http.get<any>(this.resourceUrl + '/find', { params: req, observe: 'response' });
  }

  delete(id?): Observable<any> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  findAll(): Observable<any> {
    return this.http.get<any>(this.resourceUrl + '/find-all', { observe: 'response' });
  }
}
