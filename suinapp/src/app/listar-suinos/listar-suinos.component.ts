import { Component, OnInit } from '@angular/core';
import { SuinoService } from '../suino.service';

@Component({
  selector: 'app-listar-suinos',
  templateUrl: './listar-suinos.component.html',
  styleUrls: ['./listar-suinos.component.css']
})
export class ListarSuinosComponent implements OnInit {
  suinos: any[] = [];
  constructor(private suinoService : SuinoService) { }

  ngOnInit(): void {
    this.carregarSuinos();
  }

  carregarSuinos() {
    this.suinoService.listarSuinos().subscribe((suinos: any[]) => {
      this.suinos = suinos;
      console.log('Suínos carregados: ',suinos);
    },
    (error) => {
      console.error('Erro ao carregar suínos: ',error);
    }
    );
  }


}
