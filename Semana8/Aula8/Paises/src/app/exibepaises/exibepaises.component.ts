import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service';

@Component({
  selector: 'app-exibepaises',
  templateUrl: './exibepaises.component.html',
  styleUrl: './exibepaises.component.css',
  providers: [CountriesService]
})
export class ExibepaisesComponent implements OnInit  {
  paises: any[] = [];

  constructor(private countriesService: CountriesService) {
  }

  ngOnInit(): void {
    this.countriesService.getCountries().subscribe(data => {
      this.paises = data.map(pais => {
        return {
          nome: pais.name.common,
          populacao: pais.population
        };
      });
    });
  }



}
