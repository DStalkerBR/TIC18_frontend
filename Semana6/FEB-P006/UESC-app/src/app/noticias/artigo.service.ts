import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtigoService {
  constructor(private http: HttpClient) {}

  obterArtigos(): Observable<any[]> {
    return this.http.get<any[]>('https://campusdata.uark.edu/apiv2/articles/SearchArticle?$orderby=publishDate+desc&$top=3')
      .pipe(map(artigos => this.removerTagsHtmlDosArtigos(artigos)));
  }

  private removerTagsHtmlDosArtigos(artigos: any[]): any[] {
    return artigos.map(artigo => {
      return {
        ...artigo,
        brief: this.removerTagsHtml(artigo.brief)
      };
    });
  }

  private removerTagsHtml(htmlString: string): string {
    const div = document.createElement('div');
    div.innerHTML = htmlString;
    return div.textContent || div.innerText || '';
  }
}
