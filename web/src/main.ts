import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
export { PerfectScrollbarComponent } from './lib/perfect-scrollbar.component';
export { PerfectScrollbarDirective } from './lib/perfect-scrollbar.directive';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

export {
  Geometry,
  Position,

  PERFECT_SCROLLBAR_CONFIG,

  PerfectScrollbarConfig,
  PerfectScrollbarConfigInterface
} from './lib/perfect-scrollbar.interfaces';

export { PerfectScrollbarModule } from './lib/perfect-scrollbar.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
