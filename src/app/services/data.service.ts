import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { gymSchema } from '../models/gymSchema';

const TOKEN = 'token';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  loginInfoSubject = new Subject();
  loginInfo = { email: '' };

  gym?: gymSchema;
  setGymData(data: gymSchema) {
    this.gym = data;
  }
  getGymData(): gymSchema {
    return this.gym as gymSchema;
  }

  setLoginInfo(email: string) {
    this.loginInfo = { email: email as any };
    localStorage.setItem(TOKEN, email!);
    this.loginInfoSubject.next(this.loginInfo);
  }

  getLoginInfo() {
    const data = localStorage.getItem(TOKEN);
    return data;
  }

  getLoginInfoSub() {
    return this.loginInfoSubject.asObservable();
  }
}
