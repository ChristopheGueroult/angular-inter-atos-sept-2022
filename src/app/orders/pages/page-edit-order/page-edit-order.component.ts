import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';
import { OrdersFacade } from '../../store/facades/orders.facades';

@Component({
  selector: 'app-page-edit-order',
  templateUrl: './page-edit-order.component.html',
  styleUrls: ['./page-edit-order.component.scss'],
})
export class PageEditOrderComponent implements OnInit {
  public item$ = this.facade.order$;
  constructor(private facade: OrdersFacade) {}

  ngOnInit(): void {}
  public action(item: Order): void {
    this.facade.updateOrder(item);
  }
}
