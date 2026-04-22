import { BootstrapContext, bootstrapApplication } from '@angular/platform-browser';
import { App } from './App/App';
import { config } from './App/App_Config_Server';

const bootstrap = (context: BootstrapContext) => bootstrapApplication(App, config, context);

export default bootstrap;
