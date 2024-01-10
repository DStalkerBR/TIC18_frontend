import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaTarefasComponent } from './lista-tarefas/lista-tarefas.component';
import { ItemTarefasComponent } from './item-tarefas/item-tarefas.component';
import { RepeaterDirective } from './repeater.directive';
import { AnimatorDirective } from './animator.directive';

@NgModule({
  declarations: [
    AppComponent,
    ListaTarefasComponent,
    ItemTarefasComponent,
    RepeaterDirective,
    AnimatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
