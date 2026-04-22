import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './App/App_Config';
import { App } from './App/App';

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
