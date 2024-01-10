import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Aula7';
  tarefas_appComponents = ['Ensolarado', 'Sol Ardente', 'Calor'];
  temperatura = 30;

  @ViewChild('temp') temp!: ElementRef<any>;

  onTarefaAdicionada(tarefa: string) {
    console.log("Evento onTarefaAdicionada disparado no componente AppComponent");
    this.tarefas_appComponents.push(tarefa);
  }

  mudarTemperatura() {
    console.log("Evento mudarTemperature disparado no componente AppComponent");
    this.temp.nativeElement.innerText = 'Temperatura:' + this.temperatura + 'ºC';
    this.temperatura = this.temperatura + 10;
    console.log(this.temp.nativeElement.innerText);
  }
  
}
