// usuario.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private apiUrl = 'http://localhost:5432/pro_fut';

  constructor(private http: HttpClient) {}

  cadastrar(nome: string, sobrenome: string, email: string, senha: string): Observable<any> {
    const usuarioData = { nome, sobrenome, email, senha };
    return this.http.post(`${this.apiUrl}/cadastrar`, usuarioData);
  }
}


  // Adicione outros métodos conforme necessário, como obter informações do usuário, atualizar, excluir, etc.

