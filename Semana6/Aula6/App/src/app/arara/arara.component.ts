import { Component } from '@angular/core';

@Component({
  selector: 'app-arara',
  templateUrl: './arara.component.html',
  styleUrl: './arara.component.css'
})
export class AraraComponent {
  title:string = 'Arara';
  imagem:string = 'https://s1.static.brasilescola.uol.com.br/be/2021/10/araras.jpg';
  descricao:string = 'O nome arara se refere a diferentes espécies de aves pertencentes à família Psittacidae.';
  link:string = 'https://pt.wikipedia.org/wiki/Arara-canind%C3%A9';
  url:string = 'https://4.bp.blogspot.com/-s595Bgufkio/Ut_FM8h2NxI/AAAAAAAAErM/AI5OWHXKr0I/s1600/animais-araras-caninde-wallpaper.jpg';
  especies:Array<string> = ["arara-canindé", "arara-canga", "arara-vermelha-grande", "arara-azul-grande", "arara-azul-de-lear"];
  nome2:string = 'Tamanduá';

  public getToString(): string {
    return this.title + '-' + this.imagem + '-' + this.descricao + '-' + this.link;
  }

  public onClick(): void {
    alert("Clicou aqui");
  }
}
