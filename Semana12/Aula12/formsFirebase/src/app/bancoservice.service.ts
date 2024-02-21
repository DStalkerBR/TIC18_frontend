import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BancoserviceService {
  private readonly compraVenda = './assets/compraVenda.json'
  

  constructor(private http:HttpClient) { }

  getCompraVendas() : Observable<any> {
    return this.http.get<any>(this.compraVenda);
  }
}
