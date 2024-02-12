import { Routes } from '@angular/router';
import { TurismoComponent } from './turismo/turismo.component';
import { UniversidadeComponent } from './uesc/universidade/universidade.component';
import { WikiMainComponent } from './wikiapi/wiki-main/wiki-main.component';


export const routes: Routes = [
  { path: 'turismo', component: TurismoComponent },
  { path: 'uesc', component: UniversidadeComponent },
  { path: 'wiki', component: WikiMainComponent}
];
