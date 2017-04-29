import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-list',
  template: `
    <app-card *ngFor="let card of cards" [name]="card.name" [branch]="card.branch"></app-card>
  `
})
export class CardListComponent  {
  @Input() cards;
}
