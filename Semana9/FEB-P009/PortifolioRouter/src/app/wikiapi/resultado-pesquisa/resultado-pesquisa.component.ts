import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { WikipediaApiService } from '../../services/wikipedia-api.service';
import { RealceTermoPipe } from '../pipes/realce-termo.pipe';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-resultado-pesquisa',
  standalone: true,
  imports: [RealceTermoPipe, CommonModule],
  templateUrl: './resultado-pesquisa.component.html',
  styleUrl: './resultado-pesquisa.component.css',
  providers: [WikipediaApiService]

})
export class ResultadoPesquisaComponent{
  @Input() termo : string = '';
  @Input() artigos : any[] = [];

  constructor(private wikipediaApiService: WikipediaApiService) {}


}
