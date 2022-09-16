import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { createEffect, ofType } from '@ngrx/effects';
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import { selectRouteParam } from 'src/app/store/reducer/router.reducer';
import { OrdersService } from '../../services/orders.service';
import * as ordersActions from '../actions/orders.actions';

@Injectable()
export class OrdersEffects {
  constructor(
    private actions$: Actions,
    private ordersService: OrdersService,
    private router: Router,
    private store: Store
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

  // effect to add item in collection
  addOrderEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ordersActions.tryAddOrderAction),
      switchMap(({ order }: { order: Order }) =>
        this.ordersService.add(order).pipe(
          map((order: Order) => ordersActions.addOrderSuccessAction({ order })),
          tap(() => {
            this.router.navigate(['orders']);
          }),
          catchError((error) => of(ordersActions.errorOrdersAction({ error })))
        )
      )
    )
  );

  // id param in route
  getIdChange$ = createEffect(() =>
    this.store.select(selectRouteParam('id')).pipe(
      map((id) => {
        if (id) {
          return ordersActions.tryGetOrderByIdAction({ id: Number(id) });
        } else {
          return ordersActions.errorOrdersAction({ error: null });
        }
      })
    )
  );

  // get order by id
  getOrderEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ordersActions.tryGetOrderByIdAction),
      switchMap(({ id }: { id: number }) =>
        this.ordersService.getItemById(id).pipe(
          map((order: Order) =>
            ordersActions.getOrderByISuccessdAction({ order })
          ),
          catchError((error) => of(ordersActions.errorOrdersAction({ error })))
        )
      )
    )
  );

  // update order
  updateOrderEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ordersActions.tryUpdateOrderAction),
      switchMap(({ order }: { order: Order }) =>
        this.ordersService.update(order).pipe(
          map((order: Order) =>
            ordersActions.updateOrderSuccessAction({ order })
          ),
          tap(() => {
            this.router.navigate(['orders']);
          }),
          catchError((error) => of(ordersActions.errorOrdersAction({ error })))
        )
      )
    )
  );
}
