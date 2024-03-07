import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class BackendService {
  private readonly firebaseURL = 'https://suinofarm-default-rtdb.firebaseio.com/';

  constructor(private http: HttpClient) {}

  post(objeto: any, tabela: string = objeto.constructor.name) {
    return this.http.post(`${this.firebaseURL}${tabela}.json`, objeto);
  }

  getAll(tabela: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.firebaseURL}${tabela}.json`);
  }

  get(key: string, tabela: string) {
    return this.http.get(`${this.firebaseURL}${tabela}/${key}.json`);
  }

  put(key: string, objeto: any, tabela: string = objeto.constructor.name) {
    return this.http.put(`${this.firebaseURL}${tabela}/${key}.json`, objeto);
  }

  delete(key: string, tabela: string) {
    return this.http.delete(`${this.firebaseURL}${tabela}/${key}.json`);
  }
}
