import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';
import { OrdersFacade } from '../../store/facades/orders.facades';

@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrls: ['./page-add-order.component.scss'],
})
export class PageAddOrderComponent implements OnInit {
  constructor(private facade: OrdersFacade) {}

  ngOnInit(): void {}
  public action(item: Order): void {
    this.facade.addOrder(item);
    // this.ordersService.add(item).subscribe(() => {
    //   this.router.navigate(['orders']);
    // });
  }
}
