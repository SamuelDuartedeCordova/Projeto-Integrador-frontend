import {Component, Input, OnInit} from '@angular/core';
import {ValidationErrors} from "@angular/forms";
import {Subject} from "rxjs";
import {AsyncPipe, NgIf} from "@angular/common";
import {FormErrorType, FormValidationError} from "./form-error.model";

@Component({
  selector: 'app-form-error',
  standalone: true,
  imports: [AsyncPipe, NgIf],
  templateUrl: './form-error.component.html',
  styleUrl: './form-error.component.scss'
})
export class FormErrorComponent implements OnInit {
  errors$= new Subject<ValidationErrors>();
  validationError: FormValidationError | null = null;

  @Input() deveMostrar: boolean = false;

  @Input()
  set errors(errors: ValidationErrors | null | undefined) {
    if (errors) {
      this.errors$.next(errors);
      console.log(errors);
    } else {
      this.validationError = null;
    }
  }

  ngOnInit() {
    this.errors$.subscribe((error: any) => {
      if (error.email) {
        this.validationError = new FormValidationError(FormErrorType.EMAIL);
      }

      if (error.required) {
        this.validationError = new FormValidationError(FormErrorType.REQUIRED);
      }
    });
  }
}
