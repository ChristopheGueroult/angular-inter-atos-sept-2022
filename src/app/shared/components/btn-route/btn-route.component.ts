import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-btn-route',
  templateUrl: './btn-route.component.html',
  styleUrls: ['./btn-route.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BtnRouteComponent implements OnInit {
  @Input() label!: string;
  @Input() route!: string;
  constructor() {}

  ngOnInit(): void {}
  check() {
    console.log('BTN ROUTE CHECK');
  }
}
