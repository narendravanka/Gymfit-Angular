import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { gymSchema } from '../models/gymSchema';

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

  setLoginInfo(email: string | null) {
    this.loginInfo = { email: email as any };
    this.loginInfoSubject.next(this.loginInfo);
  }

  getLoginInfoSub() {
    return this.loginInfoSubject.asObservable();
  }
}
