import { createReducer, on } from '@ngrx/store';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import * as ordersActions from '../actions/orders.actions';

export interface OrdersState {
  orders: Order[];
  error: any;
  // selectedOrder: Order | null;
}

export const initialOrderState: OrdersState = {
  orders: [
    new Order({
      tjmHt: 1200,
      nbJours: 10,
      tva: 20,
      state: StateOrder.OPTION,
      typePresta: 'coachingDFGH',
      client: 'Modis',
      comment: 'Merci Modis pour les 10k',
      id: 1,
    }),
  ],
  error: null,
  // selectedOrder: null,
};

export const ordersFeatureKey = 'orders';

export const ordersReducer = createReducer(
  initialOrderState,
  on(
    ordersActions.getAllOrdersSuccessAction,
    (state: OrdersState, { orders }: { orders: Order[] }): OrdersState => {
      return {
        ...state,
        orders: [...orders],
      };
    }
  ),
  on(
    ordersActions.updateOrderSuccessAction,
    (state: OrdersState, { order }: { order: Order }): OrdersState => {
      return {
        ...state,
        orders: state.orders.map((item) =>
          item.id !== order.id ? item : order
        ),
      };
    }
  )
);
