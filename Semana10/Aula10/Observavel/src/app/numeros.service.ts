import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NumerosService {

  constructor() { 

  }

  getNumeros(): Observable<number> {
    const observador = new Observable<number>(observer => {
      let i : number = 0;
      while (i < 100){
        observer.next(++i);
      }
    });
    
    return observador;
  }
}
