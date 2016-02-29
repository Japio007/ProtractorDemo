///<reference path="../node_modules/angular2/typings/browser.d.ts"/>

import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {AppComponent} from './app.component';
import {LoggerService} from './blocks/logger.service';
import {HTTP_PROVIDERS} from 'angular2/http';

bootstrap(AppComponent, [
    LoggerService, ROUTER_PROVIDERS, HTTP_PROVIDERS
]);
