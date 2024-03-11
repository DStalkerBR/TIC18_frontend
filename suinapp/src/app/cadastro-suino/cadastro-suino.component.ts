import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-suino',
  templateUrl: './cadastro-suino.component.html',
  styleUrls: ['./cadastro-suino.component.css']
})
export class CadastroSuinoComponent {
  cadastroSuinoForm: FormGroup;
  statusValues = [
    { name: 'Ativo' },
    { name: 'Vendido' },
    { name: 'Morto' }
  ];
  sexoValues = [
    { name: 'M' },
    { name: 'F' }
  ];
  

  constructor(){
    this.cadastroSuinoForm = new FormGroup({
      brincoAnimal: new FormControl(null, [Validators.required, Validators.pattern(/^[0-9]*$/)]),
      brincoPai: new FormControl(null, [Validators.required, Validators.pattern(/^[0-9]*$/)]),
      brincoMae: new FormControl(null, [Validators.required, Validators.pattern(/^[0-9]*$/)]),
      dataNasc: new FormControl(null, [Validators.required, Validators.pattern(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/)]),
      dataSaida: new FormControl(null, [Validators.required, Validators.pattern(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/)]),
      status: new FormControl(null, [Validators.required]),
      sexo: new FormControl(null, [Validators.required])
      })
  }

  onSubmit(){

  }
  
}
