import { Component } from '@angular/core';
import { DestaqueComponent } from '../destaque/destaque.component';
import { NoticiasComponent } from '../noticias/noticias.component';
import { ResultadosComponent } from '../resultados/resultados.component';
import { ServicosComponent } from '../servicos/servicos.component';
import { ServicoComponent } from '../servico/servico.component';

@Component({
  selector: 'app-universidade',
  standalone: true,
  imports: [DestaqueComponent, NoticiasComponent, ResultadosComponent, ServicosComponent, ServicoComponent],
  templateUrl: './universidade.component.html',
  styleUrl: './universidade.component.css'
})
export class UniversidadeComponent {

}
