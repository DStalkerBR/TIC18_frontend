import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormAdicionarComponent } from './form-adicionar/form-adicionar.component';
import { ListarComponent } from './listar/listar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';

const router : Routes = [
  { path: 'adicionar', component: FormAdicionarComponent},
  { path: 'listar', component: ListarComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    FormAdicionarComponent,
    ListarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(router)
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
