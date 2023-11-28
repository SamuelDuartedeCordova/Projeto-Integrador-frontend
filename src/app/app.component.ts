import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Cadastro } from './models/cadastro';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  private codigo = 1;
  cadastros: Cadastro[] = []

  @ViewChild("formulario") formulario : NgForm | undefined

  addCadastro(formulario: NgForm) {

    if (formulario.valid) {
      let produto: Cadastro = formulario.value;

      if (cadastro.codigo > 0) {
        this.excluir(cadastro);
        this.cadastros.push(cadastro);

      } else {
        this.cadastros.push({
          ...formulario.value,
          codigo: this.codigo++})
      }

      this.formulario?.resetForm();
    }

  }

  editar(item: Cadastro) {
    if (this.formulario) {
      this.formulario.setValue(item);
    }
  }

  excluir(item: Cadastro) {
    this.cadastros = this.cadastros.filter(p => p.codigo != item.codigo);

  }

  // public nome: string = "Paulo";
  // public sobrenome: string = "Soares";
  // public email: string = "silvas.pr@gmail.com"
  // private senha: string = "1234"

}

