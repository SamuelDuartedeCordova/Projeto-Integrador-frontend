import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of, switchMap, timer} from "rxjs";
import Usuario from "../models/usuario.model";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private readonly USUARIO_SESSION_KEY = 'usuario';
  private readonly USUARIO_MOCK = {
    nome: 'Tester',
    sobrenome: 'Testonildo',
    email: 'teste@hotmail.com',
    senha: '1234'
  };

  dadosUsuarioLogado$ = new BehaviorSubject<Usuario | null>(null);

  login(email: string, senha: string): Observable<boolean> {
    return timer(2000).pipe(switchMap(() => {
      const usuario: Usuario = {
        nome: this.USUARIO_MOCK.nome,
        sobrenome: this.USUARIO_MOCK.sobrenome,
        email: email,
        senha: senha,
      };

      this.salvarSessao(usuario);

      return of(true);
    }));
  }

  logout(): void {
    this.dadosUsuarioLogado$.next(null);
    sessionStorage.removeItem(this.USUARIO_SESSION_KEY);
  }

  cadastrar(usuario: Usuario): Observable<Usuario> {
    return timer(2000).pipe(switchMap(() => of(this.USUARIO_MOCK)));
  }

  atualizarSessao(): void {
    const dadosUsuario = this.buscarSessao();
    if (dadosUsuario) {
      this.dadosUsuarioLogado$.next(dadosUsuario);
    }
  }

  private salvarSessao(usuario: Usuario): void {
    sessionStorage.setItem(this.USUARIO_SESSION_KEY, JSON.stringify(usuario));
  }

  private buscarSessao(): Usuario | null {
    const dadosSessao = sessionStorage.getItem(this.USUARIO_SESSION_KEY);
    if (dadosSessao) {
      return JSON.parse(dadosSessao) as Usuario;
    }

    return null;
  }
}
