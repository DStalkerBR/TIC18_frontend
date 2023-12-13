import { Component } from '@angular/core';

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrl: './acesso.component.css'
})
export class AcessoComponent {
  permissao:string = "disabled";
  permissoes:Array<string> = ["root", "admin", "visitante"]

  public onLogando(event: Event): void {
    for (let i=0; i< this.permissoes.length; i++){
      if ((<HTMLInputElement>event.target).value == this.permissoes[i]){
        this.permissao = "";
        break;
      }
      else {
        this.permissao = "disabled";
      }
    }
  } 

  public onClick():void {
    alert("teste"); 
  }
}
