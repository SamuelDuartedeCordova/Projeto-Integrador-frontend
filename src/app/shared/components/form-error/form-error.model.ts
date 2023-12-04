export enum FormErrorType {
  EMAIL = 'email',
  REQUIRED = 'required'
}

export class FormValidationError {
  error: FormErrorType | null = null;
  message: string = '';

  constructor(error: string) {
    switch (error) {
      case FormErrorType.EMAIL:
        this.message = 'E-mail inválido'
        break;
      case FormErrorType.REQUIRED:
        this.message = 'É necessário preencher este campo'
        break;
      default:
        this.message = '';
    }
  }
}
