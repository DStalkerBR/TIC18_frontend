import { Component, OnInit } from '@angular/core';
import { DataBaseService } from '../database.service';

@Component({
  selector: 'app-listar-suinos',
  templateUrl: './listar-suinos.component.html',
  styleUrls: ['./listar-suinos.component.css']
})
export class ListarSuinosComponent implements OnInit {
  suinos: any[] = [];
  filtroSuinoId: string = '';
  resultadoPesquisa: any[] = [];

  constructor(private suinoService: DataBaseService) { }

  ngOnInit(): void {
    this.carregarSuinos();
  }

  carregarSuinos() {
    this.suinoService.getAll('Pig').subscribe((suinos: any[]) => {
      this.suinos = Object.values(suinos);
      console.log('Suínos carregados: ', suinos);
    },
      (error) => {
        console.error('Erro ao carregar suínos: ', error);
      }
    );
  }

  excluirSuino(key: string) {
    this.suinoService.delete(key, 'Pig').subscribe(
      (res) => {
        console.log('Suíno excluído com sucesso: ', res);
        this.carregarSuinos();
      },
      (error) => {
        console.error('Erro ao excluir suíno: ', error);
      }
    );
  }

  editarSuino(key: string) {
    console.log('Editar suíno: ', key);
  }

}
