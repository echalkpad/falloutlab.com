///<reference path="../../bower_components/angular2/bundles/typings/angular2/angular2.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('angular2/core');
var TerminalComponent_1 = require('../components/TerminalComponent');
var HomeController = (function () {
    function HomeController() {
    }
    HomeController = __decorate([
        core_1.Component({}),
        core_1.View({
            template: "\n        <div>\n            <terminal></terminal>\n        </div>\n    ",
            directives: [TerminalComponent_1.TerminalComponent]
        })
    ], HomeController);
    return HomeController;
})();
exports.HomeController = HomeController;
