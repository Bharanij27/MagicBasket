import { stringify } from '@angular/compiler/src/util';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {	
	title = 'Shop-Basket';
	fruits: string[] = ["apple", "orange", "banana", "grape", "mango", "lemon", "avocado", "pineapple"];
	vegetables: string[] = ["carrot", "beetroot", "broccoli", "beans", "tomato", "onion", "brinjal"]
	itemBaskets: string[] = ["mango"];

	itemInput: string  = "";

	addItemToBasket =  (itemName : string) : void => {
		let item: string = itemName.trim().toLowerCase();
		if(this.fruits.includes(item) || this.vegetables.includes(item)  && !this.itemBaskets.includes(item)) {
			this.itemBaskets.push(item);
			this.itemInput =  "";
		}
		else{
			alert("Item not match with the list")
		}
	}

	deleteItem = (index: number) : void => {
		this.itemBaskets.splice(index, 1);
	}
}