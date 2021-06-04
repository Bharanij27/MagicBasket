import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Item, ItemType } from '../constants/Item';
import { ItemCartService } from '../item-cart.service';

@Component({
  selector: 'shop-basket',
  templateUrl: './shop-basket.component.html',
  styleUrls: ['./shop-basket.component.scss']
})
export class ShopBasketComponent implements OnInit {

  itemBaskets: Item[] = [{id : "0", name : "mango", type: ItemType.Fruit}]
 
  itemForm : FormGroup = this.formBuilder.group({
	  itemName:  ["", [Validators.required, this.isItemsExits()], ]
  });
  
  constructor(private itemCartService : ItemCartService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
	this.itemCartService.setItemsCount(this.itemBaskets.length)
  }

	addItemToBasket =  () : void => {
		let item: string = this.itemForm.value.itemName.trim().toLowerCase();
		if(this.itemCartService.fruits.includes(item) || this.itemCartService.vegetables.includes(item)) {
			if(this.basketHasItem(item)){
				let itemId : string =  Math.random().toString(36).substr(2, 9);
				let itemType : ItemType = this.itemCartService.fruits.includes(item) ? ItemType.Fruit : ItemType.Vegetable;
				this.itemBaskets.push(<Item>{id : itemId, name : item, type: itemType});
				this.itemForm.reset();				
				this.itemCartService.setItemsCount(this.itemBaskets.length)
			}
			else alert("Item already on cart");
		}
		else alert("Item not match with the list");
	}

	basketHasItem = (itemName : string) : boolean => this.itemBaskets.findIndex(item => item.name === itemName) === -1;

	removeItemFromBasket = (index: string) : void => {
		let itemIndex : number = this.itemBaskets.findIndex(item => item.id === index)
		this.itemBaskets.splice(itemIndex, 1);
		this.itemCartService.setItemsCount(this.itemBaskets.length)
	}

	isItemsExits() : ValidatorFn {
		return (control : AbstractControl) : { [key : string] : any} => {
			if(!control.value) return { invalidItem: false};
			let itemName : string = control.value.trim().toLowerCase();
			return (this.itemCartService.fruits.includes(itemName) || this.itemCartService.vegetables.includes(itemName)) ? 
			{ invalidItem: false } : { invalidItem: true }
		}
	}
}
