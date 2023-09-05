import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: [
    './big-card.component.scss',
    './big-card.responsive.component.scss',
  ],
})
export class BigCardComponent {
  @Input() _id: number = Number();
  @Input() title: string = String();
  @Input() postCover: string = String();
  @Input() resume: string = String();
}
