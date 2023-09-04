import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss', './cards.responsive.component.scss'],
})
export class CardsComponent {
  @Input() _id: number = Number();
  @Input() coverPost: string = String();
  @Input() title: string = String();
}
