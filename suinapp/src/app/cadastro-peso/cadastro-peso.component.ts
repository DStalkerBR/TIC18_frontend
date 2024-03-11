import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataBaseService } from '../database.service';
import { Pig, Weight } from '../models/pig.model';
import { Message } from 'primeng/api';


@Component({
  selector: 'app-cadastro-peso',
  templateUrl: './cadastro-peso.component.html',
  styleUrls: ['./cadastro-peso.component.css']

})
export class CadastroPesoComponent implements OnInit {
  weightForm!: FormGroup;
  msgs : Message [] = [];

  constructor(private databaseService: DataBaseService) { 
  }

  ngOnInit(): void {
    this.weightForm = new FormGroup({
      id: new FormControl(null),
      brinco: new FormControl(null, [Validators.required, Validators.pattern(/^[0-9]{1,3}$/)]),
      data: new FormControl(null, [Validators.required]),
      peso: new FormControl(null, [Validators.required, Validators.pattern(/^(\d{1,4}|\d{1,4}\.\d{1,3})$/)])
    });
  }

  onSubmit() {
    let pig: any = null;
  
    this.databaseService.getByColumn(this.weightForm.value.brinco, 'Pig', 'id').subscribe(
      (response) => {
        pig = response;
        console.log("Porco encontrado", pig);
  
        if (Object.keys(pig).length === 0) {
          alert('Porco não encontrado');
          return;
        }
  
        if (this.weightForm.valid) {
          const weight = new Weight(
            this.weightForm.value.id,
            this.weightForm.value.brinco,
            new Date(this.weightForm.value.data).toLocaleDateString(),
            this.weightForm.value.peso
          );
          this.databaseService.post(weight).subscribe(
            (response) => {
              this.msgs = [{severity:'success', summary:'Sucesso', detail:'Peso cadastrado com sucesso'}];
              console.log(response);
            },
            (error) => {
              this.msgs = [{severity:'error', summary:'Erro', detail:'Erro ao cadastrar peso'}];
              console.error(error);
            }
          );
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }  
}
