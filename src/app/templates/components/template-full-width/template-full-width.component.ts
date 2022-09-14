import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-template-full-width',
  templateUrl: './template-full-width.component.html',
  styleUrls: ['./template-full-width.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateFullWidthComponent implements OnInit {
  @Input() title!: string;
  @Input() version!: number;
  constructor() {}

  ngOnInit(): void {}
  check() {
    console.log('TEMP FULL WIDTH CHECK');
  }
}
