import { Observable } from 'rxjs';
import { BasketService } from './../../../basket/basket.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { IBasket } from '../../models/basket';

@Component({
  selector: 'app-basket-summary',
  templateUrl: './basket-summary.component.html',
  styleUrls: ['./basket-summary.component.scss']
})
export class BasketSummaryComponent implements OnInit {
  basket$: Observable<IBasket>;
  @Output() decrement: EventEmitter<IBasket> = new EventEmitter<IBasket>();
  @Output() increment: EventEmitter<IBasket> = new EventEmitter<IBasket>();
  @Output() remove: EventEmitter<IBasket> = new EventEmitter<IBasket>();

  @Input() isBasket = true;

  constructor(private basketService: BasketService) { }

  ngOnInit(): void {
    this.basket$ = this.basketService.basket$;
  }


  decrementItemQuantity(item: IBasket) {
    this.decrement.emit(item);
  }

  incrementItemQuantity(item: IBasket) {
    this.increment.emit(item);
  }

  removeBasketItem(item: IBasket) {
    this.remove.emit(item);
  }

}
