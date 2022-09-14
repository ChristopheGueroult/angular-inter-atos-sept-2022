import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-template-test',
  templateUrl: './template-test.component.html',
  styleUrls: ['./template-test.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TemplateTestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
