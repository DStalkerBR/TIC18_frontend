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
import { AuthGuard } from './auth.guard';
import { CadastroSessaoComponent } from './cadastro-sessao/cadastro-sessao.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cadastro-peso', component: CadastroPesoComponent, canActivate: [AuthGuard]},
  { path: 'edicao-peso/:id', component: EdicaoPesoComponent, canActivate: [AuthGuard]},
  { path: 'listar-suinos', component: ListarSuinosComponent, canActivate: [AuthGuard]},
  { path: 'pesagem/:id', component: PesagemComponent, canActivate: [AuthGuard]},
  { path: 'cadastrosuino', component: CadastroSuinoComponent, canActivate: [AuthGuard]},
  { path: 'editar-suino/:id', component: EditarSuinosComponent, canActivate: [AuthGuard]},
  { path: 'cadastro-sessao', component: CadastroSessaoComponent, canActivate: [AuthGuard]},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
