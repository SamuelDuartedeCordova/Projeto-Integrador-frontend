import {Component, OnInit} from '@angular/core';
import {InputSenhaComponent} from "../../shared/input-senha/input-senha.component";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {FormErrorComponent} from "../../shared/form-error/form-error.component";

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [
    InputSenhaComponent,
    ReactiveFormsModule,
    FormErrorComponent,
  ],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss'
})
export class RegisterPageComponent implements OnInit {

  loginForm = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    sobrenome: new FormControl('', [Validators.required]),
    email: new FormControl('',  [Validators.required, Validators.email]),
    senha: new FormControl('', [Validators.required]),
  });

  senhaFormControl: FormControl = undefined as any;

  ngOnInit() {
    this.senhaFormControl = this.loginForm.get('senha') as FormControl;
  }

  criarConta(): void {
    this.loginForm.markAllAsTouched();
    
  }
}
