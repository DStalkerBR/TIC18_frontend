import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormvalidacaoComponent } from './formvalidacao/formvalidacao.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'formulario', component: FormularioComponent },
  { path: 'estacaoform', component: FormvalidacaoComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    FormvalidacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule, 
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
