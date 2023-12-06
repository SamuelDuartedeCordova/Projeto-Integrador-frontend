import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import Login from '../../../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private http: HttpClient = inject (HttpClient);
  public get(): Observable<Login[]> {
    return this.http.get<Login[]>(`https/localhost:5432/login`);
  }
}
