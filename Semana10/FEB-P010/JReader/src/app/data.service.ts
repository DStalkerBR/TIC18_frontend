import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private readonly veiculosJsonUrl = './assets/veiculos.json';
  private veiculos: any = {};
  private categorias: string[] = [];
  private veiculoSelecionado: any;
  private veiculosSelecionados: any[] = [];
  private categoriasSubject = new Subject<string[]>();
  private categoriaSelecionadaSubject = new Subject<{ categoria: string, veiculos: any }>();
  private veiculoSelecionadoSubject = new Subject<any>();
  private carrinhoSubject = new Subject<any[]>();

  constructor(private http : HttpClient) {
    this.getVeiculosFromJson().subscribe(data => {
      this.veiculos = data;
      this.categorias = Object.keys(this.veiculos);
      this.categoriasSubject.next(this.categorias);
    });
  }

  getCategorias(): Observable<string[]> {
    return this.categoriasSubject.asObservable();
  }


  getCategoriaSelecionada(): Observable< { categoria: string, veiculos: any }> {
      return this.categoriaSelecionadaSubject.asObservable();
  }

  setCategoriaSelecionada(categoria: string): void {
    console.log('setCategoriaSelecionada', categoria);
    this.categoriaSelecionadaSubject.next({ categoria, veiculos: this.veiculos[categoria]});
  }

  private getVeiculosFromJson(): Observable<any> {
    return this.http.get<any>(this.veiculosJsonUrl);
  }

  setVeiculoSelecionado(veiculo: any): void {
    console.log('setVeiculoSelecionado', veiculo);
    this.veiculoSelecionado = veiculo;
    this.veiculoSelecionadoSubject.next(veiculo);
  }

  getVeiculoSelecionado(): Observable<any> {
    console.log('getVeiculoSelecionado');
    return this.veiculoSelecionadoSubject.asObservable();
  }

  adicionarVeiculoAoCarrinho(): void {
    this.veiculosSelecionados = [...this.veiculosSelecionados, this.veiculoSelecionado];
    this.carrinhoSubject.next(this.veiculosSelecionados);
  }

  removerVeiculoDoCarrinho(index: number): void {
    this.veiculosSelecionados = this.veiculosSelecionados.filter((_, i) => i !== index);
    this.carrinhoSubject.next(this.veiculosSelecionados);
  }

  getVeiculosSelecionados(): Observable<any[]> {
    return this.carrinhoSubject.asObservable();
  }
}
