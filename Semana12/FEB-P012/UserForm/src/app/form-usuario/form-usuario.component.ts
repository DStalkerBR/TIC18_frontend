import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../form.service';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styles: [`
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
    }    

    .header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
    }

    .form {
      display: flex;
      flex-direction: column;
      width: 50%;
    }

    mat-form-field {
      width: 100%;
    }

    .multiform {
      border: 1px solid #ccc;
      padding: 10px;
      border-radius: 5px;
      margin-bottom: 10px;
    }

    .multiform .form-group {
      margin-bottom: 10px;
    }`]
})
export class FormUsuarioComponent {
  title = 'UserForm';
  formUsuario: FormGroup;
  generos: string[] = ['Masculino', 'Feminino', 'Outro'];
  profissoes: string[] = ['Estudante', 'Empregado', 'Desempregado', 'Empresário', 'Outro'];
  valueEvent : any;
  statusEvent : any;
  isEventosVisible = true;

  constructor(private fb: FormBuilder, private formService: FormService) {
    this.formUsuario = this.fb.group({
      nome: ['', [
        Validators.required,
        Validators.maxLength(10), 
        Validators.pattern('^[a-zA-ZÀ-ú ]*$')
      ]],
      senha: ['', [
        Validators.required, 
        Validators.minLength(4), 
        Validators.pattern(/^(?=.*[A-Z])(?=.*[!@#$%^&*])/)
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
        Validators.pattern(/^\([0-9]{2}\)[ ]?[0-9]{4,5}-[0-9]{4}$/)
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
        this.validarDataNascimento
      ]], 
      genero: [this.generos[0], Validators.required],
      profissao:[this.profissoes[0], Validators.required]     
    });

      this.formService.trackFormChanges(this.formUsuario);
  }  

  /**
   * Valida a data de nascimento.
   * 
   * @param control O controle do formulário que contém a data de nascimento.
   * @returns Um objeto contendo a chave 'lessThanEighteen' com o valor true se a data for inválida ou se o usuário tiver menos de 18 anos, caso contrário, retorna null.
   */
  validarDataNascimento(control: AbstractControl): { [key: string]: boolean } | null {
    const inputDate = new Date(control.value);
    const currentDate = new Date();
    const eighteenYearsAgo = new Date(currentDate.getFullYear() - 18, currentDate.getMonth(), currentDate.getDate());
  
    if (isNaN(inputDate.getTime()) || inputDate > currentDate || inputDate > eighteenYearsAgo) {
      return { 'lessThanEighteen': true };
    }
  
    return null;
  }

  onSubmit() {
    var dataForm = JSON.stringify(this.formUsuario.value);
    console.log(dataForm);   
    this.formService.resetForm(this.formUsuario);
  }

  enableEventos() {
    this.formService.toggleEventos(true);
  }
}
