import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from '../constants/Item';

@Component({
  selector: 'item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {

  @Input() item : Item = <Item>{};
  @Output() deleteEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void { }

  deleteItem = () : void => {
    this.deleteEvent.emit(this.item.id);
  }

}
