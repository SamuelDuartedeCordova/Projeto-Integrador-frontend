import {Injectable} from '@angular/core';
import {Observable, of, switchMap, timer} from "rxjs";
import Usuario from "../models/usuario.model";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() {
  }

  login(email: string, senha: string): Observable<boolean> {
    console.log(email);
    console.log(senha);
    return timer(2000).pipe(switchMap(() => of(true)));
  }

  cadastrar(usuario: Usuario): Observable<Usuario> {
    return timer(2000).pipe(switchMap(() => of({
      nome: 'Tester',
      sobrenome: 'Testonildo',
      email: 'teste@hotmail.com',
      senha: '1234'
    })));
  }
}
