import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BancoserviceService } from '../bancoservice.service';

@Component({
  selector: 'app-form-adicionar',
  templateUrl: './form-adicionar.component.html',
  styleUrl: './form-adicionar.component.css'
})
export class FormAdicionarComponent {
  compraVendaForm:FormGroup;

  constructor(private bancoService: BancoserviceService) {
    this.compraVendaForm = new FormGroup({
      modelo: new FormControl(''),
      marca: new FormControl(''),
      ano: new FormControl(''),
      valor: new FormControl(''),
      cor: new FormControl(''),
      foto: new FormControl('')
    });
  }

  onSubmit() {
   //this.bancoService.adicionarCompraVenda(this.compraVendaForm.value);
  }
}
