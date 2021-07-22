import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginCred } from '../models/loginCred';
import { registerSchema } from '../models/registerSchema';
import { gymSchema } from 'src/app/models/gymSchema';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  onSubmitLogin(data: LoginCred): Promise<{ message: string }> {
    return this.http
      .post<{ message: string }>(`${environment.apiHost}/api/login`, data)
      .toPromise();
  }

  onSubmitRegister(data: registerSchema): Promise<{ message: string }> {
    console.log('auth service data ', data);
    return this.http
      .post<{ message: string }>(`${environment.apiHost}/api/register`, data)
      .toPromise();
  }

  getGyms(): Observable<gymSchema[]> {
    return this.http.get<gymSchema[]>(`${environment.apiHost}/api/gyms`);
  }
}
