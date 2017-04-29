import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-form (formSubmit)="addCard($event)" ></app-form>
    <app-card-list [cards]="users"></app-card-list>
  `
})
export class AppComponent {
  users = [];

  addCard(user) {
    this.users.push(user);
  }
}
