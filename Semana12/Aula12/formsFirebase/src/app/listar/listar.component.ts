import { Component } from '@angular/core';
import { BancoserviceService } from '../bancoservice.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent {
  compraVendaList : any = {};


  constructor(private bancoService: BancoserviceService) {

  }

  ngOnInit() {
    this.bancoService.getCompraVendas().subscribe(data => {
      this.compraVendaList = data;
    });
  }

}
