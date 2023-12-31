import {Component, OnInit} from '@angular/core';
import {InputSenhaComponent} from "../../shared/components/input-senha/input-senha.component";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {FormErrorComponent} from "../../shared/components/form-error/form-error.component";
import {Router, RouterModule} from "@angular/router";
import {AppLogoComponent} from "../../shared/components/app-logo/app-logo.component";
import {NavbarComponent} from "../../shared/components/navbar/navbar.component";
import {LoginDividerComponent} from "./components/login-divider/login-divider.component";
import {UsuarioService} from "../../shared/services/usuario/usuario.service";
import {finalize} from "rxjs";
import {NgIf} from "@angular/common";
import {SpinnerIconComponent} from "../../shared/components/spinner-icon/spinner-icon.component";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    InputSenhaComponent,
    ReactiveFormsModule,
    FormErrorComponent,
    RouterModule,
    AppLogoComponent,
    NavbarComponent,
    LoginDividerComponent,
    NgIf,
    SpinnerIconComponent
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent implements OnInit {

  processando: boolean = false;

  constructor(private router: Router, private usuarioService: UsuarioService) {
  }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', [Validators.required]),
  });

  criarContaForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  senhaFormControl: FormControl = undefined as any;

  ngOnInit() {
    this.senhaFormControl = this.loginForm.get('senha') as FormControl;
  }

  login(): void {
    this.loginForm.markAllAsTouched();
    this.loginForm.updateValueAndValidity();

    if (this.loginForm.valid) {
      this.processando = true;
      this.usuarioService.login(
        this.loginForm.get('email')?.value as string,
        this.loginForm.get('senha')?.value as string
      )
        .pipe(
          finalize(() => this.processando = false)
        )
        .subscribe(response => {
          this.router.navigate(['home']);
        })
    }
  }

  criarConta(): void {
    if (this.criarContaForm.valid) {
      this.router.navigate(['register'], {
        queryParams: {
          email: this.criarContaForm.get('email')?.value
        }
      });
    }
  }
}
