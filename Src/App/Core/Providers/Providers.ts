import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from '../../App_Routes';

export const appProviders: NonNullable<ApplicationConfig['providers']> = [
  provideBrowserGlobalErrorListeners(),
  provideRouter(routes),
  provideClientHydration(withEventReplay()),
];
