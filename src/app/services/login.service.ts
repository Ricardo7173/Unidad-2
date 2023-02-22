import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private myAppUrl = 'https://reqres.in/';
  constructor(private http: HttpClient) {}
  loginUser(user: any) {
    return this.http.post(this.myAppUrl + 'api/login/', user);
  }

  registerUser(user: any) {
    return this.http.post(this.myAppUrl + 'api/register/', user);
  }
}
