import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormService } from '../form.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent {
  valueEvent : any;
  statusEvent : any;
  isEventosVisible = true;

  constructor(private formService: FormService) {
    this.formService.getFormChanges().subscribe((data) => {
      if (data.type === 'valueChange') {
        this.valueEvent = data;
      } else if (data.type === 'statusChange') {
        this.statusEvent = data;
      }
    });
    this.formService.getEventosVisibility().subscribe((data) => {
      this.isEventosVisible = data;
    });
   }

   closeEventos() {
      this.formService.toggleEventos(false);
    }

}