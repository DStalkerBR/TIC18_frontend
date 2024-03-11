import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataBaseService } from '../database.service';
import { Pig } from '../models/pig.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-suinos',
  templateUrl: './editar-suinos.component.html',
  styleUrls: ['./editar-suinos.component.css']
})
export class EditarSuinosComponent {
  edicaoSuinoForm: FormGroup;
  id: string | null = null;
  pigToEdit: any = null;
  statusValues = [
    { name: 'Ativo' },
    { name: 'Vendido' },
    { name: 'Morto' }
  ];
  sexoValues = [
    { name: 'M' },
    { name: 'F' }
  ];

  constructor(private databaseService: DataBaseService, private route: ActivatedRoute) {
    this.edicaoSuinoForm = new FormGroup({
      brincoAnimal: new FormControl(null, [Validators.required, Validators.pattern(/^[0-9]*$/)]),
      brincoPai: new FormControl(null, [Validators.required, Validators.pattern(/^[0-9]*$/)]),
      brincoMae: new FormControl(null, [Validators.required, Validators.pattern(/^[0-9]*$/)]),
      dataNasc: new FormControl(null, [Validators.required]),
      dataSaida: new FormControl(null),
      status: new FormControl(null, [Validators.required]),
      sexo: new FormControl(null, [Validators.required])
      })

      this.id = this.route.snapshot.paramMap.get('id');

      this.databaseService.get(this.id!, 'Pig').subscribe(
        (response) => {
          this.pigToEdit = response;
          console.log(this.pigToEdit);
          this.edicaoSuinoForm.setValue({
            brincoAnimal: this.pigToEdit.id,
            brincoPai: this.pigToEdit.father,
            brincoMae: this.pigToEdit.mother,
            dataNasc: this.pigToEdit.birth,
            dataSaida: this.pigToEdit.exit,
            status: this.statusValues.find((status) => status.name === this.pigToEdit.status),
            sexo: this.sexoValues.find((sexo) => sexo.name === this.pigToEdit.sex)
          });
        },
        (error) => {
          console.error(error);
        }
      );
  }

  onSubmit(){
    const pig = new Pig(
      this.edicaoSuinoForm.value.brincoAnimal,
      this.edicaoSuinoForm.value.brincoPai,
      this.edicaoSuinoForm.value.brincoMae,
      new Date(this.edicaoSuinoForm.value.dataNasc).toLocaleDateString(),
      new Date(this.edicaoSuinoForm.value.dataSaida).toLocaleDateString(),
      this.edicaoSuinoForm.value.status.name,
      this.edicaoSuinoForm.value.sexo.name
    );
    this.databaseService.put(this.id!, pig).subscribe(
      (response) => {
        alert('Suíno editado com sucesso!');
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );

  }
}
