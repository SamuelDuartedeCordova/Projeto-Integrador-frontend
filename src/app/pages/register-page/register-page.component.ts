import {Component, OnInit} from '@angular/core';
import {InputSenhaComponent} from "../../shared/components/input-senha/input-senha.component";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {FormErrorComponent} from "../../shared/components/form-error/form-error.component";
import {AppLogoComponent} from "../../shared/components/app-logo/app-logo.component";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [
    InputSenhaComponent,
    ReactiveFormsModule,
    FormErrorComponent,
    AppLogoComponent,
  ],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss'
})
export class RegisterPageComponent implements OnInit {

  registroForm = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    sobrenome: new FormControl('', [Validators.required]),
    email: new FormControl('',  [Validators.required, Validators.email]),
    senha: new FormControl('', [Validators.required]),
  });

  senhaFormControl: FormControl = undefined as any;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.registroForm.get('email')?.setValue(params['email']);
    });

    this.senhaFormControl = this.registroForm.get('senha') as FormControl;
  }

  criarConta(): void {
    this.registroForm.markAllAsTouched();

  }
}
