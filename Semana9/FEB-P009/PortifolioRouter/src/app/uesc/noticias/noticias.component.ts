import { Component, OnInit } from '@angular/core';
import { ArtigoService } from '../../services/artigo.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})

export class NoticiasComponent implements OnInit {
  artigos: any[] = [];

  constructor(private artigoService: ArtigoService) { }

  ngOnInit(): void {
    this.artigoService.obterArtigos(3).subscribe(artigos => this.artigos = artigos);
  }
}
