import { Component, OnInit } from '@angular/core';
import { DataBaseService } from '../database.service';

@Component({
  selector: 'app-listar-suinos',
  templateUrl: './listar-suinos.component.html',
  styleUrls: ['./listar-suinos.component.css']
})
export class ListarSuinosComponent implements OnInit {
  suinos: any[] = [];
  
  constructor(private suinoService: DataBaseService) { }

  ngOnInit(): void {
    this.carregarSuinos();
  }

  filter(event: any, field: string) {

    const value = event?.target?.value || '';
    
    console.log('Filtrando por: ', value, field);

    if (value === '') {
      this.carregarSuinos();
      return;
    }

    console.log('Tipo de variavel: ', typeof value);

    this.suinos = this.suinos.filter((suino) => {
      return suino[field].toString().toLowerCase().includes(value.toString().toLowerCase());
    });

    console.log('Suínos filtrados: ', this.suinos);    
  }

  carregarSuinos() {
    this.suinoService.getAll('Pig').subscribe(
      (suinos: any[]) => {
        this.suinos = Object.keys(suinos).map((key : any) => {
          return {
            key: key,
            ...suinos[key]
          };
        });
        console.log('Suínos carregados: ', this.suinos);
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


}
