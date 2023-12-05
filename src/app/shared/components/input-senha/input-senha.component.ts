import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-input-senha',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './input-senha.component.html',
  styleUrl: './input-senha.component.scss'
})
export class InputSenhaComponent {
  @Input() control: FormControl = undefined as any;

  mostrarSenha: boolean = false;

  alterarEstadoVisibilidade(): void {
    this.mostrarSenha = !this.mostrarSenha;
  }
}
