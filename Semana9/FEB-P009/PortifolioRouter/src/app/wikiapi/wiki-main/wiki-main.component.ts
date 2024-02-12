import { Component } from '@angular/core';
import { WikipediaApiService } from '../../services/wikipedia-api.service';
import { BarraBuscaComponent } from '../barra-busca/barra-busca.component';
import { ResultadoPesquisaComponent } from '../resultado-pesquisa/resultado-pesquisa.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-wiki-main',
  standalone: true,
  imports: [BarraBuscaComponent, ResultadoPesquisaComponent, CommonModule],
  templateUrl: './wiki-main.component.html',
  styleUrl: './wiki-main.component.css',
  providers: [WikipediaApiService]
})
export class WikiMainComponent {
  title = 'WikiAPI';
  termo: string = '';
  artigos: any[] = [];
  resultado: boolean = false;

  constructor(private wikipediaApiService: WikipediaApiService) { }

  termoBusca(event: string): void {
    this.termo = event;
    this.realizarPesquisa();
  }

  realizarPesquisa() {
    this.wikipediaApiService.getArticles(this.termo).subscribe((data) => {
      this.artigos = data.query.search.map((artigo: any) => {
        return {
          title: artigo.title,
          snippet: artigo.snippet,
          link: `https://pt.wikipedia.org/?curid=${artigo.pageid}`
        }
      });
    });
    this.resultado = true;
  }
}
