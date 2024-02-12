import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-barra-busca',
  templateUrl: './barra-busca.component.html',
  styleUrl: './barra-busca.component.css',
  standalone: true
})
export class BarraBuscaComponent {
  @Output() termoBuscaBarra : EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  onBuscar(termo : string) {
    this.termoBuscaBarra.emit(termo);
  }
}
