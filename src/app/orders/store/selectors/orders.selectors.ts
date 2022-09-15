import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Order } from 'src/app/core/models/order';
import { ordersFeatureKey, OrdersState } from '../reducers/orders.reducers';

export const selectOrdersFeature =
  createFeatureSelector<OrdersState>(ordersFeatureKey);

export const selectOrders = createSelector(
  selectOrdersFeature,
  (state: OrdersState): Order[] => {
    return state.orders;
  }
);
