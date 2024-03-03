import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-usuario',
  template: `
    <form [formGroup]="formUsuario">
      <input type="text" formControlName="nome" placeholder="Nome">
      <input type="email" formControlName="email" placeholder="Email">
      <input type="password" formControlName="senha" placeholder="Senha">
      <button type="submit">Enviar</button>
    </form>
  `,
  styles: ``
})
export class FormUsuarioComponent {
  title = 'UserForm';
  formUsuario: FormGroup;
  private generos: string[] = ['Masculino', 'Feminino', 'Outro'];
  private profissoes: string[] = ['Estudante', 'Empregado', 'Desempregado', 'Empresário', 'Outro'];

  constructor(private fb: FormBuilder) {
    this.formUsuario = this.fb.group({
      nome: ['', [
        Validators.required,
        Validators.maxLength(10), 
        Validators.pattern('^[a-zA-Z0-9]*$')
      ]],
      senha: ['', [
        Validators.required, 
        Validators.minLength(4), 
        Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])')
      ]],
      email: ['', [
        Validators.required, 
        Validators.email
      ]], 
      nomeCompleto: this.fb.group({
        primeiroNome: ['', Validators.required],
        ultimoNome: ['', Validators.required]
      }), 
      telefone: ['', [
        Validators.required, 
        Validators.pattern('^(?:\\d{10}|\\d{11})$')
      ]],
      endereco : this.fb.group({
        rua: ['', Validators.required],
        numero: ['', Validators.required],
        complemento: [''],
        cidade: ['', Validators.required],
        estado: ['', Validators.required],
        cep: ['', [
          Validators.required, 
          Validators.pattern('^[0-9]{5}-[0-9]{3}$')
        ]]
      }), 
      dataDeNascimento: ['', [
        Validators.required, 
        this.validarDataNascimento,
        Validators.pattern('^(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[0-2])/[0-9]{4}$')
      ]], 
      genero: [this.generos[0], Validators.required],
      profissao:[this.profissoes[0], Validators.required]     
    });
  }

  validarDataNascimento(control: AbstractControl): { [key: string]: boolean } | null {
    const inputDate = new Date(control.value);
    const currentDate = new Date();
    const eighteenYearsAgo = new Date(currentDate.getFullYear() - 18, currentDate.getMonth(), currentDate.getDate());
  
    if (isNaN(inputDate.getTime()) || inputDate > currentDate || inputDate > eighteenYearsAgo) {
      return { 'invalidDate': true };
    }
  
    return null;
  }

}
