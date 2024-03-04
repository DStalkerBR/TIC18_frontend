// propriedades.component.ts
import { Component, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-propriedades',
  templateUrl: './propriedades.component.html',
  styleUrls: ['./propriedades.component.css']
})
export class PropriedadesComponent {
  veiculo: any;
  propriedades: string[] = [];

  constructor(private dataService: DataService) {
    this.dataService.getVeiculoSelecionado().subscribe(veiculo => {
      this.veiculo = veiculo;
      this.propriedades = Object.keys(this.veiculo);
    });
  }

}
