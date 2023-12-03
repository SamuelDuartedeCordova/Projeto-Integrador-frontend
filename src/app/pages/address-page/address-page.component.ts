import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { FormErrorComponent } from '../../shared/form-error/form-error.component';
import { InputSenhaComponent } from '../../shared/input-senha/input-senha.component';

@Component({
  selector: 'app-address-page',
  standalone: true,
  imports: [
    InputSenhaComponent,
    ReactiveFormsModule,
    FormErrorComponent,
  ],
  templateUrl: './address-page.component.html',
  styleUrl: './address-page.component.scss'
})
export class AddressPageComponent implements OnInit {
cadastrar() {
throw new Error('Method not implemented.');
}
  loginForm = new FormGroup({
    email: new FormControl('',  [Validators.required, Validators.email]),
    senha: new FormControl('', [Validators.required]),
  });

  senhaFormControl: FormControl = undefined as any;
addressForm: any;

  ngOnInit() {
    this.senhaFormControl = this.loginForm.get('senha') as FormControl;
  }

  login(): void {
    this.loginForm.markAllAsTouched();
  }
}
