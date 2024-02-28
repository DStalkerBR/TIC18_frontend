import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BancoService } from '../banco.service';

@Component({
  selector: 'app-form-game',
  templateUrl: './form-game.component.html',
  styleUrl: './form-game.component.css'
})
export class FormGameComponent {
  GameForm : FormGroup;

  constructor(private bancoService : BancoService) { 
    this.GameForm = new FormGroup({
      name: new FormControl(''),
      genre: new FormControl(''),
      platform: new FormControl(''),
      release: new FormControl(''),
      developer: new FormControl(''),
      publisher: new FormControl(''),
      cover: new FormControl(''),
      description: new FormControl(''),
    });
    this.bancoService.getBanco().subscribe((data : any) => {
      console.log(data);
    });
  }

  onSubmit(){
    this.bancoService.postBanco(this.GameForm.value).subscribe((data : any) => {
      console.log(data);
    });
  }

}
