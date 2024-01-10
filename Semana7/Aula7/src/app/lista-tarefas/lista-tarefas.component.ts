import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-lista-tarefas',
  templateUrl: './lista-tarefas.component.html',
  styleUrl: './lista-tarefas.component.css'
})
export class ListaTarefasComponent {
  @Input() listaTarefas_listaTarefasComponent : string[] = [];
  @Output() tarefaAdicionada = new EventEmitter<string>(); 

  addTarefa(tarefa: string) {
    console.log("Evento addTarefa disparado no componente ListaTarefasComponent");
    this.tarefaAdicionada.emit(tarefa);
  }

}
