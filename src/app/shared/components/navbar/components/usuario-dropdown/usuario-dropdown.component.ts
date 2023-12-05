import {Component, ElementRef, HostListener, Input} from '@angular/core';
import {Router} from "@angular/router";
import Usuario from "../../../../models/usuario.model";
import {UsuarioService} from "../../../../services/usuario/usuario.service";

@Component({
  selector: 'app-usuario-dropdown',
  standalone: true,
  imports: [],
  templateUrl: './usuario-dropdown.component.html',
  styleUrl: './usuario-dropdown.component.scss'
})
export class UsuarioDropdownComponent {

  @Input() usuario: Usuario | null = null;

  menuAberto: boolean = false;

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.menuAberto = false;
    }
  }

  constructor(private elementRef: ElementRef, private usuarioService: UsuarioService) {
  }

  logout(): void {
    this.usuarioService.logout();
    window.location.reload();
  }
}
