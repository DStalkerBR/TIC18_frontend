import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExibepaisesComponent } from './exibepaises/exibepaises.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CountriesService } from './countries.service';

@NgModule({
  declarations: [
    AppComponent,
    ExibepaisesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CountriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
