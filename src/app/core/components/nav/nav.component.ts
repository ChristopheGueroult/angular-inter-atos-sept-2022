import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { VersionService } from '../../services/version.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent implements OnInit {
  public langs = ['fr', 'en'];
  public defaultLang = this.translateService.getDefaultLang();
  constructor(
    private versionService: VersionService,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {}
  public increment(): void {
    this.versionService.increment();
  }
  check() {
    console.log('NAV CHECK');
  }
  changeLang(event: any) {
    const lang = event.target.value;
    this.translateService.use(lang);
  }
}
