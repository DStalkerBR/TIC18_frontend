import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CadastroPesoComponent } from './cadastro-peso/cadastro-peso.component';
import { EdicaoPesoComponent } from './edicao-peso/edicao-peso.component';
import { ListarSuinosComponent } from './listar-suinos/listar-suinos.component';
import { PesagemComponent } from './pesagem/pesagem.component';
import { CadastroSuinoComponent } from './cadastro-suino/cadastro-suino.component';
import { EditarSuinosComponent } from './editar-suinos/editar-suinos.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cadastro-peso', component: CadastroPesoComponent },
  { path: 'edicao-peso/:id', component: EdicaoPesoComponent },
  { path: 'listar-suinos', component: ListarSuinosComponent },
  { path: 'pesagem/:id', component: PesagemComponent },
  { path: 'cadastrosuino', component: CadastroSuinoComponent },
  { path: 'editar-suino/:id', component: EditarSuinosComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
