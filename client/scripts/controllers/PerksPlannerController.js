///<reference path="../../bower_components/angular2/bundles/typings/angular2/angular2.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('angular2/core');
var PerksPlannerComponent_1 = require('../components/PerksPlannerComponent');
var PlayerModel_1 = require('../models/PlayerModel');
var PerksPlannerController = (function () {
    function PerksPlannerController(currentPlayerModel) {
        this.playerModel = currentPlayerModel;
    }
    PerksPlannerController = __decorate([
        core_1.Component({}),
        core_1.View({
            template: "\n        <div>\n            <perks-planner></perks-planner>\n        </div>\n    ",
            directives: [PerksPlannerComponent_1.PerksPlannerComponent]
        }),
        __param(0, core_1.Inject(PlayerModel_1.CurrentPlayerModel))
    ], PerksPlannerController);
    return PerksPlannerController;
})();
exports.PerksPlannerController = PerksPlannerController;
