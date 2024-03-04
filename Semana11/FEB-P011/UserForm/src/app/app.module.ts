import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FormUsuarioComponent } from './form-usuario/form-usuario.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FormUsuarioComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // Importação para habilitar as animações do Angular Material
    ReactiveFormsModule,    
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule, // Importação necessária ao usar o MatDatepickerModule
    MatFormFieldModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
