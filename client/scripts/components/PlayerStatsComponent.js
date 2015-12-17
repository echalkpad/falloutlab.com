///<reference path="../../bower_components/angular2/angular2.d.ts" />
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
var PlayerModel_1 = require('../models/PlayerModel');
var PlayerStatsComponent = (function () {
    function PlayerStatsComponent(currentPlayerModel) {
        this.playerModel = currentPlayerModel;
    }
    PlayerStatsComponent.prototype.onChanges = function (test) {
        console.log('changes', test);
    };
    PlayerStatsComponent.prototype.onIncrease = function (type) {
        if (this.playerModel[type] === 10) {
            return;
        }
        ++this.playerModel[type];
        this.playerModel.updated();
    };
    PlayerStatsComponent.prototype.onDecrease = function (type) {
        if (this.playerModel[type] === 0) {
            return;
        }
        --this.playerModel[type];
        this.playerModel.updated();
    };
    PlayerStatsComponent.prototype.onRankIncrease = function (type) {
        ++this.playerModel.level;
        this.playerModel.updated();
    };
    PlayerStatsComponent.prototype.onRankDecrease = function (type) {
        if (this.playerModel.level < 1) {
            return;
        }
        --this.playerModel.level;
        console.log(this.playerModel.level);
        this.playerModel.updated();
    };
    PlayerStatsComponent.prototype.doneTyping = function ($event) {
        if ($event.which === 13) {
            this.playerModel.userId = $event.target.value;
            this.playerModel.updated();
        }
    };
    PlayerStatsComponent.prototype.setUserId = function (input) {
        this.playerModel.userId = input.value;
        this.playerModel.updated();
    };
    PlayerStatsComponent = __decorate([
        core_1.Component({
            selector: 'player-stats'
        }),
        core_1.View({
            templateUrl: 'scripts/components/PlayerStatsComponent.html'
        }),
        __param(0, core_1.Inject(PlayerModel_1.CurrentPlayerModel))
    ], PlayerStatsComponent);
    return PlayerStatsComponent;
})();
exports.PlayerStatsComponent = PlayerStatsComponent;
