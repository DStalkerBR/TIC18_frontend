import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowGamesComponent } from './show-games/show-games.component';
import { FormGameComponent } from './form-game/form-game.component';
import { EditGameComponent } from './edit-game/edit-game.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
  {path: 'show', component: ShowGamesComponent},
  {path: 'form', component: FormGameComponent},
  {path: 'edit/:id', component: EditGameComponent},
  {path: '', redirectTo: '/show', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ShowGamesComponent,
    FormGameComponent,
    EditGameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
