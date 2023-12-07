// auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl = 'http://localhost:5432/pro_fut';

  constructor(private http: HttpClient) {}

  login(email: string, senha: string ): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { email, senha });
  }

  // Pode adicionar métodos para logout, verificar autenticação, etc.
}
