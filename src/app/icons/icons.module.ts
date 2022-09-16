import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconCloseComponent } from './components/icon-close/icon-close.component';
import { IconDeleteComponent } from './components/icon-delete/icon-delete.component';
import { IconEditComponent } from './components/icon-edit/icon-edit.component';
import { IconNavComponent } from './components/icon-nav/icon-nav.component';
import { IconEyeComponent } from './components/icon-eye/icon-eye.component';
import { IconEyeSlashComponent } from './components/icon-eye-slash/icon-eye-slash.component';

@NgModule({
  declarations: [
    IconCloseComponent,
    IconNavComponent,
    IconDeleteComponent,
    IconEditComponent,
    IconEyeComponent,
    IconEyeSlashComponent,
  ],
  imports: [CommonModule, FontAwesomeModule],
  exports: [
    IconCloseComponent,
    IconNavComponent,
    IconDeleteComponent,
    IconEditComponent,
    IconEyeComponent,
    IconEyeSlashComponent,
  ],
})
export class IconsModule {}
