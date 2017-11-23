import { Component, OnInit, Input } from '@angular/core';
import { CardShema } from '../cardshema';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card: CardShema;

  constructor() { }

  ngOnInit() {
  }

  dragStart(ev) {
    ev.dataTransfer.setData('text', ev.target.id);
  }

}
