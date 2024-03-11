import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ListarSuinosComponent } from './listar-suinos/listar-suinos.component';
import { PesagemComponent } from './pesagem/pesagem.component';
import { CadastroSuinoComponent } from './cadastro-suino/cadastro-suino.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'listar-suinos', component: ListarSuinosComponent },
  { path: 'pesagem', component: PesagemComponent },
  { path: 'cadastrosuino', component: CadastroSuinoComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
