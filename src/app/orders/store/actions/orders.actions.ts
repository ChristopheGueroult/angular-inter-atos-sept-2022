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

// action capted by an effect to call api and add item in orders collection

// action capted by a reducer to add order in OrdersState
export const addOrderSuccessAction = createAction(
  '[Orders] Add order',
  props<{ order: Order }>()
);
// action to manage errors returned by api
export const errorOrdersAction = createAction(
  '[Orders] error orders',
  props<{ error: any }>()
);

// try get order by id capted by effect
export const tryGetOrderByIdAction = createAction(
  '[ Orders ] try get order by id',
  props<{ id: number }>()
);

// get order by id capted by reducer
export const getOrderByISuccessdAction = createAction(
  '[ Orders ] get order by id',
  props<{ order: Order }>()
);

// try update order capted by effect
export const tryUpdateOrderAction = createAction(
  '[Orders] try update order',
  props<{ order: Order }>()
);

// uptade order
export const tryAddOrderAction = createAction(
  '[Orders] try add order',
  props<{ order: Order }>()
);
