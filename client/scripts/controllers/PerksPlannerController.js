///<reference path="../../bower_components/angular2/bundles/typings/angular2/angular2.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var angular2_1 = require('angular2/angular2');
var PerksPlannerComponent_1 = require('../components/PerksPlannerComponent');
var PlayerModel_1 = require('../models/PlayerModel');
var PerksPlannerController = (function () {
    function PerksPlannerController(currentPlayerModel) {
        this.playerModel = currentPlayerModel;
    }
    PerksPlannerController = __decorate([
        angular2_1.Component({}),
        angular2_1.View({
            template: "\n        <div>\n            <perks-planner></perks-planner>\n        </div>\n    ",
            directives: [PerksPlannerComponent_1.PerksPlannerComponent]
        }),
        __param(0, angular2_1.Inject(PlayerModel_1.CurrentPlayerModel))
    ], PerksPlannerController);
    return PerksPlannerController;
})();
exports.PerksPlannerController = PerksPlannerController;
