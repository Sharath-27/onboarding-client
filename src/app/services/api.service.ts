import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:5000';

  constructor(
    private http: HttpClient,
  ) { }
    addUser(user: any): Observable<any> {
      return this.http.post<any>(this.apiUrl+'/api/register', user);
    }
    getUsers(): Observable<any> {
      return this.http.get<any>(this.apiUrl+'/api/users');
    }
}
