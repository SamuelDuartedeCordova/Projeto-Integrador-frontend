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

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [
    InputSenhaComponent,
    ReactiveFormsModule,
    FormErrorComponent,
    AppLogoComponent,
    NavbarComponent,
    SpinnerIconComponent,
    NgIf,
  ],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss'
})
export class RegisterPageComponent implements OnInit {

  processando: boolean = false;

  registroForm = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    sobrenome: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', [Validators.required]),
  });

  senhaFormControl: FormControl = undefined as any;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private usuarioService: UsuarioService) {
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params['email']) {
        this.registroForm.get('email')?.setValue(params['email']);
      }
    });

    this.senhaFormControl = this.registroForm.get('senha') as FormControl;
  }

  criarConta(): void {
    this.registroForm.markAllAsTouched();

    if (this.registroForm.valid) {
      this.processando = true;

      this.usuarioService.cadastrar({
        nome: this.registroForm.get('nome')?.value as string,
        sobrenome: this.registroForm.get('sobrenome')?.value as string,
        email: this.registroForm.get('email')?.value as string,
        senha: this.registroForm.get('senha')?.value as string,
      })
        .pipe(
          finalize(() => this.processando = false)
        )
        .subscribe(response => {
        window.alert('Conta criada com sucesso');
        this.router.navigate(['home']);
      });
    }
  }
}
