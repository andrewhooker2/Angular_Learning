import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <div class="hero is-primary is-bold">
      <div class="hero-body">
        <p class="title">
          Contact Me!
        </p>
      </div>
    </div>

    <section class="section">
      <div class="container">
        <form>

          <!-- Name -->
          <!-- Need to add Error checking  -->
          <div class="field">
            <label class="label"> Name </label>
            <input 
              type="text"
              name="name"
              class="input"
              
            >

            <div class="help is-error">
              Your name is required!
            </div>
          </div>

          <!-- Email -->
          <!-- Need to add Error checking  -->
          <div class="field">
            <label class="label"> Email </label>
            <input type="email" name="email" class="input">
          </div>

          <!-- Message -->
          <!-- Need to add Error checking  -->
          <div class="field">
            <label class="label"> Your Message </label>
            <textarea name="message" class="textarea"></textarea>
          </div>

          <button type="submit" class="button is-large is-primary">
            Send it!
          </button>
        </form>


      </div>
    </section>


  `,
  styles: [
  ]
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
