import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Order } from 'src/app/core/models/order';

@Component({
  selector: 'app-tab-light',
  templateUrl: './tab-light.component.html',
  styleUrls: ['./tab-light.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabLightComponent implements OnInit {
  @Input() headers!: string[];
  constructor() {}

  ngOnInit(): void {}
  check() {
    console.log('TAB LIGHT CHECK');
  }
}
