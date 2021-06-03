import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemCartService {

  private itemsCount = new BehaviorSubject<number>(0);
  fruits: string[] = ["apple", "orange", "banana", "grape", "mango", "lemon", "avocado", "pineapple"];
  vegetables: string[] = ["carrot", "beetroot", "broccoli", "beans", "tomato", "onion", "brinjal"]

  constructor() { }

  public getItemsCount(): Observable<number> {
    return this.itemsCount.asObservable();
  }
  /*
   * @param {string} message : siblingMsg
   */
  public setItemsCount(count: number): void {
    this.itemsCount.next(count);
  }
}
