import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { PageSignInComponent } from './pages/page-sign-in/page-sign-in.component';
import { PageForgotComponent } from './pages/page-forgot/page-forgot.component';
import { FormSignUpComponent } from './components/form-sign-up/form-sign-up.component';
import { FormSignInComponent } from './components/form-sign-in/form-sign-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PageSignUpComponent } from './pages/page-sign-up/page-sign-up.component';
import { PageResetComponent } from './pages/page-reset/page-reset.component';
import { TemplatesModule } from '../templates/templates.module';
import { IconsModule } from '../icons/icons.module';

@NgModule({
  declarations: [
    PageSignInComponent,
    PageSignUpComponent,
    PageResetComponent,
    PageForgotComponent,
    FormSignInComponent,
    FormSignUpComponent,
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    TemplatesModule,
    IconsModule,
  ],
})
export class LoginModule {}
