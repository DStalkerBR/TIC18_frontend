import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  private formChanges: Subject<any> = new Subject<any>();
  private formObserver: Observable<any> = this.formChanges.asObservable();

  constructor() { }

  /**
   * Rastreia as mudanças em um formulário e emite eventos quando o valor ou status do formulário mudar.
   * @param form - O FormGroup a ser rastreado.
   */
  trackFormChanges(form: FormGroup): void {
    form.valueChanges.subscribe((value) => {
      // Emite um evento quando o valor do formulário muda
      this.formChanges.next({ type: 'valueChange', value });
      // Valida o telefone e o CEP
      form.get('telefone')?.valueChanges.subscribe(() => {
        this.validarTelefone(form);
      });
      form.get('endereco.cep')?.valueChanges.subscribe(() => {
        this.validarCEP(form);
      });
    });
    form.statusChanges.subscribe((status) => {
      this.formChanges.next({ type: 'statusChange', status });
    });
  }

  /**
   * Valida e formata o número de telefone no formulário.
   * @param form O FormGroup contendo o campo de telefone.
   */
  validarTelefone(form: FormGroup) {
    var telefone = form.get('telefone')?.value;

    if (telefone) {
      if (telefone.length > 15) {
        telefone = telefone.substring(0, 15);
      }
      telefone = telefone.replace(/\D/g, '');
      telefone = telefone.replace(/^(\d{2})(\d)/g, '($1) $2');
      telefone = telefone.replace(/(\d{4,5})(\d{4})$/, '$1-$2');
      form.get('telefone')?.setValue(telefone, { emitEvent: false });
    }
  }

  /**
   * Valida e formata o CEP informado no formulário.
   * 
   * @param form O FormGroup contendo o campo de endereço com o CEP.
   */
  validarCEP(form: FormGroup) {
    var cep = form.get('endereco.cep')?.value;

    if (cep) {
      if (cep.length > 9) {
        cep = cep.substring(0, 9);
      }
      cep = cep.replace(/\D/g, '');
      cep = cep.replace(/^(\d{5})(\d)/, '$1-$2');
      form.get('endereco.cep')?.setValue(cep, { emitEvent: false });
    }
  }

  getFormChanges(): Observable<any> {
    return this.formObserver;
  }

  resetForm(form: FormGroup): void {
    form.reset();
  }
}
