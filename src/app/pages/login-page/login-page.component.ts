import {Component, OnInit} from '@angular/core';
import {InputSenhaComponent} from "../../shared/input-senha/input-senha.component";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {FormErrorComponent} from "../../shared/form-error/form-error.component";
import {Router, RouterModule} from "@angular/router";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    InputSenhaComponent,
    ReactiveFormsModule,
    FormErrorComponent,
    RouterModule
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent implements OnInit {

  constructor(private router: Router) {
  }

  loginForm = new FormGroup({
    email: new FormControl('',  [Validators.required, Validators.email]),
    senha: new FormControl('', [Validators.required]),
  });

  senhaFormControl: FormControl = undefined as any;

  ngOnInit() {
    this.senhaFormControl = this.loginForm.get('senha') as FormControl;
  }

  login(): void {
    this.loginForm.markAllAsTouched();

    if (this.loginForm.valid) {
      this.router.navigate(['home']);
    }
  }
}
