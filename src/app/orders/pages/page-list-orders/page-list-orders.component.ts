import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostListener,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import { VersionService } from 'src/app/core/services/version.service';
import { OrdersService } from '../../services/orders.service';
import { OrdersFacade } from '../../store/facades/orders.facades';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageListOrdersComponent implements OnInit {
  public states = Object.values(StateOrder);
  public title = 'list Orders';
  public headers: string[];
  public collection$!: Observable<Order[]>;
  public version$!: Subject<number>;
  constructor(
    private ordersService: OrdersService,
    private versionService: VersionService,
    private router: Router,
    private cd: ChangeDetectorRef,
    private facades: OrdersFacade
  ) {
    this.headers = [
      'Action',
      'Type',
      'Client',
      'NbJours',
      'Tjm HT',
      'Total HT',
      'Total TTC',
      'State',
    ];
    this.collection$ = this.facades.orders$;

    this.version$ = this.versionService.version;
  }
  ngOnInit(): void {
    this.facades.loadOrders();
  }
  public changeState(item: Order, event: Event): void {
    const target = event.target as HTMLSelectElement;
    const state = target.value as StateOrder;
    this.facades.changeState(item, state);
  }

  public goToEdit(id: number): void {
    this.router.navigate(['orders', 'edit', id]);
  }
  public deleteItem(id: number): void {
    this.ordersService.delete(id).subscribe();
  }
  check() {
    console.log('PAGE LIST ORDERS CHECK');
  }
  @HostListener('window:scroll')
  onScroll() {
    console.log('scroll');
  }
}
