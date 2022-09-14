import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { VersionService } from '../../services/version.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  public version$: Subject<number>;
  constructor(private versionService: VersionService) {
    this.version$ = this.versionService.version;
  }

  ngOnInit(): void {}
  check() {
    console.log('HEADER CHECK');
  }
}
