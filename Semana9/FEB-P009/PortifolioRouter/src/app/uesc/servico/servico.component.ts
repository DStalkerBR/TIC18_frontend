import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-servico',
  standalone: true,
  templateUrl: './servico.component.html',
  styleUrls: ['./servico.component.css'],
})
export class ServicoComponent {
  @Input() servico: any;
}
