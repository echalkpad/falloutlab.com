///<reference path='../bower_components/angular2/bundles/typings/angular2/angular2.d.ts' />

import {provide, enableProdMode} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS, APP_BASE_HREF} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {Config} from './Config';

import {App} from './app';

enableProdMode();

bootstrap(App, [Config, HTTP_PROVIDERS, ROUTER_PROVIDERS, provide(APP_BASE_HREF, { useValue: '/' })]);
