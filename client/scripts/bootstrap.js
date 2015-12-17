///<reference path='../bower_components/angular2/bundles/typings/angular2/angular2.d.ts' />
var core_1 = require('angular2/core');
var browser_1 = require('angular2/platform/browser');
var router_1 = require('angular2/router');
var http_1 = require('angular2/http');
var Config_1 = require('./Config');
var app_1 = require('./app');
core_1.enableProdMode();
browser_1.bootstrap(app_1.App, [Config_1.Config, http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS, core_1.provide(router_1.APP_BASE_HREF, { useValue: '/' })]);
