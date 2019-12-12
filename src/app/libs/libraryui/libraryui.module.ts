import {NgModule, Optional, SkipSelf} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloComponent } from './hello/hello.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HelloComponent],
  exports: [
    HelloComponent
  ]
})
export class LibraryuiModule {
  constructor (@Optional() @SkipSelf() parentModule: LibraryuiModule) {
    if (parentModule) {
      throw new Error(
        'CommonUiModule is already loaded. Import it in the AppModule only');
    }
  }
}
