import { Component, EventEmitter, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit{
  veiculosSelecionados: any[] = [];
  veiculoRemovido = new EventEmitter<any>();

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getVeiculosSelecionados().subscribe(veiculos => {
      this.veiculosSelecionados = veiculos;
    });
  }

  removerVeiculo(veiculo: any) {
    this.dataService.removerVeiculoDoCarrinho(veiculo);
  }
}
