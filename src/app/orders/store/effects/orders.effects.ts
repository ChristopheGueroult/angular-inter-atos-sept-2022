import { Injectable } from '@angular/core';
import { createEffect, ofType } from '@ngrx/effects';
import { Actions } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';
import * as ordersActions from '../actions/orders.actions';

@Injectable()
export class OrdersEffects {
  constructor(
    private actions$: Actions,
    private ordersService: OrdersService
  ) {}
  // effect to get all orders from api using http call on OrdersService
  getAllOrdersEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ordersActions.tryGetAllOrdersAction),
      switchMap(() =>
        this.ordersService.collection.pipe(
          map((orders: Order[]) =>
            ordersActions.getAllOrdersSuccessAction({ orders })
          ),
          catchError((error) => of(ordersActions.errorOrdersAction({ error })))
        )
      )
    )
  );

  changeStateEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ordersActions.tryChangeStateOrderAction),
      switchMap(({ order, state }: { order: Order; state: StateOrder }) =>
        this.ordersService.changeState(order, state).pipe(
          map((order: Order) =>
            ordersActions.updateOrderSuccessAction({ order })
          ),
          catchError((error) => of(ordersActions.errorOrdersAction({ error })))
        )
      )
    )
  );
}
