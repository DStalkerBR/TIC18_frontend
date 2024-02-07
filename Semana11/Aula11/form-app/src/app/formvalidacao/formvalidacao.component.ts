import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formvalidacao',
  templateUrl: './formvalidacao.component.html',
  styleUrl: './formvalidacao.component.css'
})
export class FormvalidacaoComponent {
  estacaoForm: FormGroup;
  statusArray: any =  {
    'instalada': 'Instalada',
    'nao-instalada': 'Não Instalada',
    'operante': 'Operante'
  };

  constructor(private formBuilder: FormBuilder) {
    this.estacaoForm = this.formBuilder.group({
      'nome': ['', Validators.required],
      'email': ['', [Validators.required, Validators.email]],
      'localizacao': ['', Validators.required],
      'status': ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.estacaoForm.invalid) {
      console.log('Formulário inválido');
      return;
    }
    console.log(this.estacaoForm.value);
  }

}
