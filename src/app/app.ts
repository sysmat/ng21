import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <a href="/">Home</a>
      |
      <a href="/user?id=2">User</a>
    </nav>
    <h1>angular 21</h1>
    <router-outlet />
  `,
  imports: [RouterOutlet],
})
export class App {}
