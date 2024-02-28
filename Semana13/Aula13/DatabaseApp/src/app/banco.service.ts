import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BancoService {

  private firebaseURL : string = 'https://residencia-1563f-default-rtdb.firebaseio.com/banco.json';

  constructor(private http : HttpClient) { }

  getBanco(){
    return this.http.get(this.firebaseURL);
  }

  postBanco(banco : any){
    return this.http.post(this.firebaseURL, banco);
  }

  putBanco(banco : any){
    return this.http.put(this.firebaseURL, banco);
  }

  deleteBanco(){
    return this.http.delete(this.firebaseURL);
  }
}
