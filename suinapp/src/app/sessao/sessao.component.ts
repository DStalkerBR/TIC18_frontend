import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { DataBaseService } from '../database.service';
import { Sessao } from '../models/sessao.model';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-sessao',
  templateUrl: './sessao.component.html',
  styleUrls: ['./sessao.component.css']
})
export class SessaoComponent {
  cadastroSessaoForm: FormGroup;
  taskValues = [
    { name: 'Vacinação Contra Raiva' },
    { name: 'Dar Banho' },
    { name: 'Alimentar' }
  ]
  msgs : Message[] = [];

  constructor(private dataBaseService: DataBaseService) {
    this.cadastroSessaoForm = new FormGroup({
      tarefas: new FormGroup(null, [Validators.required])
    })
    this.cadastroSessaoForm.valueChanges.subscribe(
      (value) => {
        console.log(value);
      });
  }

  onSubmit(){
    const sessao = new Sessao(
      this.cadastroSessaoForm.value.tarefas
    );
    this.dataBaseService.post(sessao).subscribe(
      (response)=>{
        this.msgs = [{severity:'success', summary:'Sucesso',detail:'Sessão Cadastrada com Sucesso'}];
        console.log(response);
      },
      (error)=>{
        this.msgs = [{severity:'error', summary:'Erro',detail:'Erro ao cadastrar Sessão'}];
        console.log(error);
      }
      
    )
  }
}
