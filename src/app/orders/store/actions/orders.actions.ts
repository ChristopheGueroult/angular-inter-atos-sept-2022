// action capted by an effect to call api and get orders collection

import { createAction, props } from '@ngrx/store';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';

// try get all order capted by effect
export const tryGetAllOrdersAction = createAction(
  '[Orders] try get all orders'
);

// action capted by un reducer to set orders property of OrdersState
export const getAllOrdersSuccessAction = createAction(
  '[Orders] get all orders',
  props<{ orders: Order[] }>()
);

// action capted by an effect to call api and set item on orders collection

// action capted by a ruducer to update item.state on OrdersState
export const tryChangeStateOrderAction = createAction(
  '[Orders] try change state order',
  props<{ order: Order; state: StateOrder }>()
);
// action capted by an effect to call api and add item in orders collection

// action capted by a ruducer to update orders property in OrdersState
export const updateOrderSuccessAction = createAction(
  '[Orders] update order',
  props<{ order: Order }>()
);

// action capted by an effect to call api and update an item in orders collection

// action capted by a ruducer to update orders property in OrdersState

// action capted by an effect to call api and delete an item in orders collection

// action capted by a reducer to refresh orders collection in OrdersState

// action capted by an effect to call api and get an item by id from orders collection

// action capted by a reducer to add or update order property in OrdersState

// action to manage errors returned by api
export const errorOrdersAction = createAction(
  '[Orders] error orders',
  props<{ error: any }>()
);
