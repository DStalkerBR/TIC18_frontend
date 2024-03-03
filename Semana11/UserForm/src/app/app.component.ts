import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Welcome to {{title}}!</h1>
    <app-form-usuario></app-form-usuario>
  `,
  styles: []
})
export class AppComponent {
  title = 'UserForm';
}
