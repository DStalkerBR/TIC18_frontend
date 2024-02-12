import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from '../app.routes';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
  title = 'PortifolioRouter';
  routes = routes;

}



