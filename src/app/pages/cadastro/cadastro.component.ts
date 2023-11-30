import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';


@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {

  private codigo = 1;
  cadastros: CadastroComponent[] = []

  @ViewChild("formulario") formulario : NgForm | undefined

  addCadastro(formulario: NgForm) {

    if (formulario.valid) {
      let cadastro: CadastroComponent = formulario.value;

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

  editar(item: CadastroComponent) {
    if (this.formulario) {
      this.formulario.setValue(item);
    }
  }

  excluir(item: CadastroComponent) {
    this.cadastros = this.cadastros.filter(c => c.codigo != item.codigo);

  }

}
