import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import Amplify, { Auth } from 'aws-amplify';
import PubSub from '@aws-amplify/pubsub';
import API from '@aws-amplify/api';
import awsconfig from './aws-exports';

API.configure(awsconfig);
PubSub.configure(awsconfig);
Amplify.configure(awsconfig);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
