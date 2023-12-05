import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {UsuarioService} from "./shared/services/usuario.service";
import {timer} from "rxjs";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Projeto-Integrador-frontend';

  constructor(private router: Router, private usuarioService: UsuarioService) {
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.usuarioService.atualizarSessao();
      }
    });
  }
}
