import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <hr>
    {{name}}
    <br>
    {{branch}}
    <hr>
  `
})
export class CardComponent {
  @Input() name: string;
  @Input() branch: string;
}
