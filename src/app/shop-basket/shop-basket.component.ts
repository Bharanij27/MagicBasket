import { Component, OnInit } from '@angular/core';
import { Item, ItemType } from '../constants/Item';
import { ItemCartService } from '../item-cart.service';

@Component({
  selector: 'shop-basket',
  templateUrl: './shop-basket.component.html',
  styleUrls: ['./shop-basket.component.scss']
})
export class ShopBasketComponent implements OnInit {

  itemBaskets: Item[] = [{id : "0", name : "mango", type: ItemType.Fruit}]

  itemInput: string  = "";
  
  constructor(private itemCartService : ItemCartService) { }

  ngOnInit(): void {
	this.itemCartService.setItemsCount(this.itemBaskets.length)
  }

	addItemToBasket =  (itemName : string) : void => {
		let item: string = itemName.trim().toLowerCase();
		if(this.itemCartService.fruits.includes(item) || this.itemCartService.vegetables.includes(item)) {
			if(this.basketHasItem(item)){
				let itemId : string =  Math.random().toString(36).substr(2, 9);
				let itemType : ItemType = this.itemCartService.fruits.includes(item) ? ItemType.Fruit : ItemType.Vegetable;
				this.itemBaskets.push(<Item>{id : itemId, name : item, type: itemType});
				this.itemInput =  "";
				this.itemCartService.setItemsCount(this.itemBaskets.length)
			}
			else alert("Already Inserted");
		}
		else alert("Item not match with the list");
	}

	basketHasItem = (itemName : string) : boolean => this.itemBaskets.findIndex(item => item.name === itemName) === -1;

	removeItemFromBasket = (index: string) : void => {
		let itemIndex : number = this.itemBaskets.findIndex(item => item.id === index)
		this.itemBaskets.splice(itemIndex, 1);
		this.itemCartService.setItemsCount(this.itemBaskets.length)
	}

}
