import {Component, OnInit} from '@angular/core';
import {InputSenhaComponent} from "../../shared/components/input-senha/input-senha.component";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {FormErrorComponent} from "../../shared/components/form-error/form-error.component";
import {AppLogoComponent} from "../../shared/components/app-logo/app-logo.component";
import {ActivatedRoute, Router} from "@angular/router";
import {NavbarComponent} from "../../shared/components/navbar/navbar.component";
import {UsuarioService} from "../../shared/services/usuario/usuario.service";
import {SpinnerIconComponent} from "../../shared/components/spinner-icon/spinner-icon.component";
import {finalize} from "rxjs";
import {NgIf} from "@angular/common";
import {RegisterService } from '../../shared/services/api/register/registrar.service';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [
    InputSenhaComponent,
    FormErrorComponent,
    SpinnerIconComponent,
    NavbarComponent,
    NgIf
  ],
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  processando: boolean = false;
  erroNoRegistro: string | undefined;

  registroForm = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    sobrenome: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', [Validators.required]),
  });

  senhaFormControl: FormControl | undefined;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private registerService: RegisterService) {
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.registroForm.get('email')?.setValue(params['email']);
    });

    this.senhaFormControl = this.registroForm.get('senha') as FormControl;
  }

  criarConta(): void {
    this.registroForm.markAllAsTouched();
    this.erroNoRegistro = undefined; // Limpa mensagens de erro anteriores

    if (this.registroForm.valid) {
      this.processando = true;

      this.registerService.cadastrar(
        this.registroForm.get('nome')?.value as string,
        this.registroForm.get('sobrenome')?.value as string,
        this.registroForm.get('email')?.value as string,
        this.registroForm.get('senha')?.value as string
      )
      .pipe(
        finalize(() => this.processando = false)
      )
      .subscribe(
        response => {
          window.alert('Conta criada com sucesso');
          this.router.navigate(['home']);
        },
        error => {
          this.erroNoRegistro = 'Erro durante o registro. Tente novamente.'; // Mensagem de erro genérica
          console.error('Erro durante o registro:', error);
        }
      );
    }
  }
}

