import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class AtendimentoService {
  atendimentosCarregados: any[] = [];

  constructor(private http: HttpClient) {
  }

  cadastrar(atendimento: any) {
    return this.http.post('https://petcare-601dc-default-rtdb.firebaseio.com/atendimentos.json', atendimento);
  }

  listar() : Observable<any[]> {
    return this.http.get<any[]>('https://petcare-601dc-default-rtdb.firebaseio.com/atendimentos.json');
  }

  detalhar(key: string) {
    return this.http.get(`https://petcare-601dc-default-rtdb.firebaseio.com/atendimentos/${key}.json`);
  }

  atualizar(key: string, atendimento: any) {
    return this.http.put(`https://petcare-601dc-default-rtdb.firebaseio.com/atendimentos/${key}.json`, atendimento);
  }

  excluir(key: string) {
    return this.http.delete(`https://petcare-601dc-default-rtdb.firebaseio.com/atendimentos/${key}.json`);
  }
}
