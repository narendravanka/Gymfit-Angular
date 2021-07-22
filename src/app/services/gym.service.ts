import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { gymSchema } from '../models/gymSchema';

@Injectable({
  providedIn: 'root',
})
export class GymService {
  constructor(private http: HttpClient) {}

  getProductById(id: string): Observable<gymSchema> {
    return this.http.get<gymSchema>(`${environment.apiHost}/api/gyms/${id}`);
  }
}
