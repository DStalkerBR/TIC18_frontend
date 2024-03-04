import { Component} from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent {
  categorias: string[] = [];

  constructor(private dataService: DataService) {
    this.dataService.getCategorias().subscribe(categorias => {
      this.categorias = categorias;
    });
  }

  selecionarCategoria(categoria: string) {
    this.dataService.setCategoriaSelecionada(categoria);
  }
}