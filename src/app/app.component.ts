import { Component } from '@angular/core';
import { environment } from '../environments/environment'
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: `
<div class="app-container">
  <div class="app-header">
    <app-header></app-header>
  </div>
  <div class="app-body">
    <router-outlet></router-outlet>
  </div>
  <div class="app-footer">
    <app-footer></app-footer>
  </div>
</div>
`
})

export class AppComponent {

  constructor (private title: Title) {
    this.title.setTitle(environment.title);
  }

}
