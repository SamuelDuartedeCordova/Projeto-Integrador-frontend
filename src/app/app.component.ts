import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {UsuarioService} from "./shared/services/usuario.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Projeto-Integrador-frontend';

  constructor(private usuarioService: UsuarioService) {
  }

  ngOnInit() {
    this.usuarioService.atualizarSessao();
  }
}
