import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <!-- Header  -->
    <div class="navbar is-dark">
      <!-- Logo -->
      <div class="navbar-brand">
        <a class="navbar-item">
          <img src="assets/img/logo2.png">
        </a>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
