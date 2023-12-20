import { Component, OnInit } from '@angular/core';
import { DestaqueService } from './destaque.service';

@Component({
  selector: 'app-destaque',
  templateUrl: './destaque.component.html',
  styleUrls: ['./destaque.component.css'],
})
export class DestaqueComponent implements OnInit {
  imagens: any;

  constructor(private destaqueService: DestaqueService) {}

  ngOnInit() {
    this.carregarDestaque();
  }

  carregarDestaque() {
    this.destaqueService.obterDestaque().then(
      (data) => {
        this.imagens = data;
      },
      (erro) => {
        console.error('Erro ao obter destaques:', erro);
      }
    );
  }
}
