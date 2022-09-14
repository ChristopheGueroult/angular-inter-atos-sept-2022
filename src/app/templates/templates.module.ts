import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateFullWidthComponent } from './components/template-full-width/template-full-width.component';
import { TemplateContainerComponent } from './components/template-container/template-container.component';
import { TemplateColsComponent } from './components/template-cols/template-cols.component';
import { TemplateTestComponent } from './template-test/template-test.component';



@NgModule({
  declarations: [
    TemplateFullWidthComponent,
    TemplateContainerComponent,
    TemplateColsComponent,
    TemplateTestComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TemplateFullWidthComponent,
    TemplateContainerComponent,
    TemplateColsComponent,
    TemplateTestComponent
  ]
})
export class TemplatesModule { }
