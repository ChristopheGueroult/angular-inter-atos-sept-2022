import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import * as ordersActions from '../actions/orders.actions';
import * as ordersSelectors from '../selectors/orders.selectors';

@Injectable({
  providedIn: 'root',
})
export class OrdersFacade {
  constructor(private store: Store) {}
  // selectors
  orders$ = this.store.select(ordersSelectors.selectOrders);

  // actions
  loadOrders() {
    this.store.dispatch(ordersActions.tryGetAllOrdersAction());
  }
  changeState(item: Order, state: StateOrder) {
    this.store.dispatch(
      ordersActions.tryChangeStateOrderAction({ order: item, state: state })
    );
  }
}
