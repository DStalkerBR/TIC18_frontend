import { Component } from '@angular/core';
import { NumerosService } from '../numeros.service';

@Component({
  selector: 'app-observador',
  templateUrl: './observador.component.html',
  styleUrl: './observador.component.css'
})
export class ObservadorComponent {
  numeros : any[] = [];

  constructor(private numeroService : NumerosService) { }

  ngOnInit(): void {
    this.numeroService.getNumeros().subscribe(
      (numero: number) => this.numeros.push(numero)
    );
  }
}
