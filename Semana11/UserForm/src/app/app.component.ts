import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1> {{title}} </h1>
    <app-form-usuario></app-form-usuario>
  `,
  styles: [
    `
      h1 {
        text-align: center;
        background-color: #4CAF50;
        color: white;
        padding: 10px;        
      }
    `
  ]
})
export class AppComponent {
  title = 'UserForm';
}
