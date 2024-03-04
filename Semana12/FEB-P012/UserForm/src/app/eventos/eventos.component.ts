import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormService } from '../form.service';

@Component({
  selector: 'app-eventos',
  template: `
  <div class="eventos" *ngIf=" (valueEvent || statusEvent)">
  <span class="close-btn" (click)="closeEventos()">X</span>
  <h2>Quadro de Eventos</h2>
  <div *ngIf="valueEvent" class="valueEvent">         
      <p> Tipo de Evento: {{valueEvent?.type}} </p>
      <p>Nome: {{valueEvent?.value.nome}}</p>
      <p>Senha: {{valueEvent?.value.senha}}</p>
      <p>Email: {{valueEvent?.value.email}}</p>
      <p>Nome Completo: {{valueEvent?.value.nomeCompleto?.primeiroNome}} {{valueEvent?.value.nomeCompleto?.ultimoNome}}</p>
      <p>Telefone: {{valueEvent?.value.telefone}}</p>
      <p>Endereço: {{valueEvent?.value.endereco?.rua}}, {{valueEvent?.value.endereco?.numero}}, {{valueEvent?.value.endereco?.complemento}}, {{valueEvent?.value.endereco?.cidade}}, {{valueEvent?.value.endereco?.estado}}, {{valueEvent?.value.endereco?.cep}}</p>
      <p>Data de Nascimento: {{valueEvent?.value.dataDeNascimento}}</p>
      <p>Gênero: {{valueEvent?.value.genero}}</p>
      <p>Profissão: {{valueEvent?.value.profissao}}</p>
  </div>
  <div *ngIf="statusEvent" class="statusEvent">
      <p> Tipo de Evento: {{statusEvent?.type}} </p>
      <p>Status do Form: {{statusEvent?.status}}</p>
  </div>
</div>
  `,
  styles: `
  .eventos {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    max-width: 400px;
    width: 100%;
    z-index: 1000;
    }

    .eventos h2 {
        margin-bottom: 10px;
        display: flex;
        justify-content: space-between;
    }

    .valueEvent, .statusEvent {
        margin-top: 10px;
    }
    .valueEvent > p {
        margin-bottom: 5px;
        background-color: #f0f0f0;
        padding: 5px;
        border-radius: 5px;
    }

    .close-btn {
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;
    }
`
})
export class EventosComponent {
  valueEvent : any;
  statusEvent : any;

  constructor(private formService: FormService) {
    this.formService.getFormChanges().subscribe((data) => {
      if (data.type === 'valueChange') {
        this.valueEvent = data;
      } else if (data.type === 'statusChange') {
        this.statusEvent = data;
      }
    });
   }

    closeEventos() {
      this.valueEvent = null;
      this.statusEvent = null;
    }

}