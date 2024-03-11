import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataBaseService } from '../database.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Weight } from '../models/pig.model';

@Component({
  selector: 'app-edicao-peso',
  templateUrl: './edicao-peso.component.html',
  styleUrls: ['./edicao-peso.component.css']
})
export class EdicaoPesoComponent {
  weightForm!: FormGroup;
  id: string | null = null;
  weightToEdit: any = null;
  
  constructor(private databaseService: DataBaseService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.weightForm = new FormGroup({
      brinco: new FormControl(null, [Validators.required, Validators.pattern(/^[0-9]{1,3}$/)]),
      data: new FormControl(null, [Validators.required]),
      peso: new FormControl(null, [Validators.required, Validators.pattern(/^(\d{1,4}|\d{1,4}\.\d{1,3})$/)])
    });

    this.id = this.route.snapshot.paramMap.get('id');

    this.databaseService.get(this.id!, 'Weight').subscribe(
      (response) => {
        this.weightToEdit = response;
        console.log(this.weightToEdit);
        this.weightForm.setValue({
          brinco: this.weightToEdit.pig,
          data: this.weightToEdit.date,
          peso: this.weightToEdit.weight
        });
      },
      (error) => {
        console.error(error);
      }
    );
  }

  onSubmit() {
    if (this.weightForm.valid) {
      const weight = new Weight(
        this.weightToEdit.id,        
        this.weightForm.value.brinco,
        new Date(this.weightForm.value.data).toLocaleDateString(),
        this.weightForm.value.peso
      );
      this.databaseService.put(this.id!, weight).subscribe(
        (response) => {
          alert('Peso editado com sucesso!');
          console.log(response);
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }  
}