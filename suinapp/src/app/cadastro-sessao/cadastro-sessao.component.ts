import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Message } from 'primeng/api';
import { DataBaseService } from '../database.service';
import { Sessao } from '../models/sessao.model';

@Component({
  selector: 'app-cadastro-sessao',
  templateUrl: './cadastro-sessao.component.html',
  styles: ``
})
export class CadastroSessaoComponent {
  cadastroSessaoForm: FormGroup;
  sessaoForm!: FormGroup;
  pigValues:any [] = [];
  taskValues = [
    { name: 'Vacinação Contra Raiva' },
    { name: 'Dar Banho' },
    { name: 'Alimentar' }
  ];
  msgs : Message[] = [];
  constructor(private dataBaseService: DataBaseService) {
    this.cadastroSessaoForm = new FormGroup({
      tarefas: new FormControl('',[Validators.required])
    })
    this.cadastroSessaoForm.valueChanges.subscribe(
      (value) => {
        console.log(value);
      });
  }

  ngOnInit(): void {
    this.sessaoForm = new FormGroup({
      id: new FormControl(null),
      data: new FormControl(null, [Validators.required]),
      brincos: new FormControl(null, [Validators.required, Validators.pattern(/^[0-9]{1,3}$/)]),
      tarefas: new FormControl(null, [Validators.required])
    });
    this.getAllBrincos();
  }

  onSubmit(){
    let pigs : any = null;
    this.dataBaseService.getByColumn(this.sessaoForm.value.brincos, 'Pig', 'id').subscribe(
      (response) => {
        pigs = response;
        console.log("Porco encontrado", pigs);

        if (Object.keys(pigs).length === 0) {
          alert('Porco não encontrado');
          return;
        }

        if (this.sessaoForm.valid) {
          const sessao = new Sessao(
            this.sessaoForm.value.id,
            new Date(this.sessaoForm.value.data).toLocaleDateString(),
            this.sessaoForm.value.brincos,
            this.sessaoForm.value.tarefas
          );
          this.dataBaseService.post(sessao, 'Sessao').subscribe(
            (response) => {
              this.msgs = [{severity:'success', summary:'Sucesso', detail:'Sessão cadastrada com sucesso'}];
              console.log(response);
            },
            (error) => {
              this.msgs = [{severity:'error', summary:'Erro', detail:'Erro ao cadastrar sessão'}];
              console.error(error);
            }
          );
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }
  getAllBrincos():void{
    this.dataBaseService.getByColumn('','Pig','brinco').subscribe(
      brincos=>{
        this.pigValues = brincos.map((brinco:any)=>brinco.id);
      },
      error=>{
        console.error("error ao buscar brincos", error);
      }
    );
  }

}
