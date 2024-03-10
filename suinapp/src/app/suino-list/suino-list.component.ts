import { Component, OnInit } from '@angular/core';
import { PigsService } from '../pigs.service';

@Component({
  selector: 'app-suino-list',
  templateUrl: './suino-list.component.html',
  styleUrls: ['./suino-list.component.css']
})
export class SuinoListComponent implements OnInit {
  pigs: any[] = [];

  constructor(private pigsService: PigsService) { }

  ngOnInit(): void {
    this.pigsService.getPigs().subscribe(pigs => {
      console.log('Suinos: ', pigs);
      this.pigs = pigs;
    },
      error => {
        console.error('Erro ao buscar suinos: ', error);
      });
  }
  editarSuino(suino: any) {
    // Lógica para editar suíno
  }

  deletarSuino(suino: any) {
    // Lógica para deletar suíno
  }
}
