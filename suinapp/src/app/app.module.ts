import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'

import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { MenubarModule } from 'primeng/menubar';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PanelModule } from 'primeng/panel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListarSuinosComponent } from './listar-suinos/listar-suinos.component';
import { CadastroSuinoComponent } from './cadastro-suino/cadastro-suino.component';
import { AuthInterceptor } from './auth.interceptor';
import { CadastroPesoComponent } from './cadastro-peso/cadastro-peso.component';
import { CalendarModule } from 'primeng/calendar';
import { EdicaoPesoComponent } from './edicao-peso/edicao-peso.component';
import { CalcularIdadeMesesPipe } from './calcular-idade-meses.pipe';
import { PesagemComponent } from './pesagem/pesagem.component';
import { ChartModule } from 'primeng/chart';
import { TableModule } from 'primeng/table';
import { EditarSuinosComponent } from './editar-suinos/editar-suinos.component';
import { MessagesModule } from 'primeng/messages';
import { CadastroSessaoComponent } from './cadastro-sessao/cadastro-sessao.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CadastroPesoComponent,
    EdicaoPesoComponent,
    ListarSuinosComponent,
    CalcularIdadeMesesPipe,
    PesagemComponent,
    CadastroSuinoComponent,
    EditarSuinosComponent,
    CadastroSessaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ButtonModule,
    CheckboxModule,
    InputTextModule,
    RippleModule,
    MenubarModule,
    PanelModule,
    CalendarModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    FormsModule,
    ChartModule,
    BrowserModule,
    DropdownModule,
    TableModule,
    ChartModule,
    MessagesModule,
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
