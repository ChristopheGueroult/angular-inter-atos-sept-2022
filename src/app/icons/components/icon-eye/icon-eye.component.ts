import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { faEye } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-icon-eye',
  templateUrl: './icon-eye.component.html',
  styleUrls: ['./icon-eye.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconEyeComponent implements OnInit {
  public myIcon = faEye;
  constructor() {}

  ngOnInit(): void {}
}
