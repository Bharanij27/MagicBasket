import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ItemCartService } from '../item-cart.service';

@Component({
  selector: 'item-summary',
  templateUrl: './item-summary.component.html',
  styleUrls: ['./item-summary.component.scss']
})
export class ItemSummaryComponent implements OnInit, OnDestroy {
  public subscription: Subscription = new Subscription;
  public itemCount : number = 0;
  items : string[] = []

  constructor(public itemCartService : ItemCartService) { }

  ngOnInit(): void {
    this.subscription = this.itemCartService.getItemsCount().subscribe(count => this.itemCount = count);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
