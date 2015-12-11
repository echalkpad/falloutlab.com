///<reference path="../../bower_components/angular2/bundles/typings/angular2/angular2.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var angular2_1 = require('angular2/angular2');
var TerminalComponent_1 = require('../components/TerminalComponent');
var HomeController = (function () {
    function HomeController() {
    }
    HomeController = __decorate([
        angular2_1.Component({}),
        angular2_1.View({
            template: "\n        <div>\n            <terminal></terminal>\n        </div>\n    ",
            directives: [TerminalComponent_1.TerminalComponent]
        })
    ], HomeController);
    return HomeController;
})();
exports.HomeController = HomeController;
