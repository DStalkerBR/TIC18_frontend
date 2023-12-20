import { Component, OnInit } from '@angular/core';
import { ArtigoService } from './artigo.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})

export class NoticiasComponent implements OnInit {
  artigos: any[] = [];

  constructor(private artigoService: ArtigoService) { }

  ngOnInit(): void {
    this.artigoService.obterArtigos().subscribe(artigos => this.artigos = artigos);
  }
}
