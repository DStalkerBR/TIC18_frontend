import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataBaseService } from '../database.service';
import { Pig, Weight } from '../models/pig.model';
import { map } from 'rxjs';

@Component({
  selector: 'app-cadastro-peso',
  // usar primeng para fazer o formulario de peso, o peso terá que ser cadastrado para cada suino
  templateUrl: './cadastro-peso.component.html',
  styleUrls: ['./cadastro-peso.component.css']

})
export class CadastroPesoComponent implements OnInit {
  weightForm!: FormGroup;

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
            this.weightForm.value.data,
            this.weightForm.value.peso
          );
          this.databaseService.post(weight).subscribe(
            (response) => {
              alert('Peso cadastrado com sucesso!');
              console.log(response);
            },
            (error) => {
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
