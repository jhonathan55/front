import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { errorsInterceptor } from './Interceptors/errors.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimationsAsync(),
    provideHttpClient(withInterceptors([errorsInterceptor])),
    provideRouter(routes), 
    importProvidersFrom(HttpClientModule)
  ]
};
