import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <!-- Header  -->
  <app-header></app-header>

  <!-- Home Page -->
  <app-home></app-home>
  
  <!-- Contact Page -->
  <app-footer></app-footer>

  `,
  styles: []
})
export class AppComponent {
  title = 'first-website';
}
