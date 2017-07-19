import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule, Http } from '@angular/http';

import { TranslateLoader, TranslateModule} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateComponent } from './translate/translate.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    TranslateModule,
    TranslateComponent
  ],
  declarations: [ TranslateComponent ]
})
export class SharedModule { }
