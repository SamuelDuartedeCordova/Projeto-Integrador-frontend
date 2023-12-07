// auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { enviroment } from '../../../../../env/env.dev';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
//  private apiUrl = 'http://localhost:5432/pro_fut';

  constructor(private http: HttpClient) {}

  login(email: string, senha: string ): Observable<any> {
    return this.http.post(`${enviroment.URL_API}/login`, { email, senha });
  }

  // Pode adicionar métodos para logout, verificar autenticação, etc.
}
