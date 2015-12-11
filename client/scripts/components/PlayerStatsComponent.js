///<reference path="../../bower_components/angular2/angular2.d.ts" />
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
        angular2_1.Component({
            selector: 'player-stats'
        }),
        angular2_1.View({
            templateUrl: 'scripts/components/PlayerStatsComponent.html',
            directives: [angular2_1.NgFor, angular2_1.NgIf]
        }),
        __param(0, angular2_1.Inject(PlayerModel_1.CurrentPlayerModel))
    ], PlayerStatsComponent);
    return PlayerStatsComponent;
})();
exports.PlayerStatsComponent = PlayerStatsComponent;
