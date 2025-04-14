import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
// import { AppRoutes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `<h1>People App</h1><router-outlet></router-outlet>`
})
export class AppComponent {}
