import {Component, OnInit} from '@angular/core';
import {AppLogoComponent} from "../app-logo/app-logo.component";
import {UsuarioService} from "../../services/usuario.service";
import {NgIf} from "@angular/common";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs";
import {SearchInputComponent} from "../search-input/search-input.component";
import {LoginDropdownComponent} from "./components/login-dropdown/login-dropdown.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    AppLogoComponent,
    NgIf,
    SearchInputComponent,
    LoginDropdownComponent
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {

  temUsuarioLogado: boolean = false;
  nomeUsuario: string = '';
  deveMostrarSomenteLogo: boolean = true;

  constructor(private usuarioService: UsuarioService, private router: Router) {
  }

  ngOnInit() {
    const url = this.router.url;
    this.deveMostrarSomenteLogo = url.includes('login') || url.includes('register');
    this.usuarioService
      .dadosUsuarioLogado$
      .subscribe(dadosUsuarioLogado => {
        this.temUsuarioLogado = !!dadosUsuarioLogado;
        if (dadosUsuarioLogado) {
          this.nomeUsuario = dadosUsuarioLogado.nome;
        }
      });
  }
}
