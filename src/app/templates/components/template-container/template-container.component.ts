import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-template-container',
  templateUrl: './template-container.component.html',
  styleUrls: ['./template-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateContainerComponent implements OnInit {
  @Input() title!: string;
  @Input() version!: number;
  constructor() {}

  ngOnInit(): void {}
}
