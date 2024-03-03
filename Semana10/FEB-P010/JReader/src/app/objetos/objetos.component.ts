import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-objetos',
  templateUrl: './objetos.component.html',
  styleUrls: ['./objetos.component.css']
})
export class ObjetosComponent implements OnInit {
  veiculos: any[] = [];
  categoriaSelecionada: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getCategoriaSelecionada().subscribe(data => {
      this.categoriaSelecionada = data.categoria
      this.veiculos = data.veiculos;
    });

  }

  selecionarVeiculo(veiculo: any) {
    this.dataService.setVeiculoSelecionado(veiculo);
  }

}