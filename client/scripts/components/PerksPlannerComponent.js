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
var PerkModel_1 = require('../models/PerkModel');
var PlayerModel_1 = require('../models/PlayerModel');
var PerksPlannerTableComponent_1 = require('./PerksPlannerTableComponent');
var PerksPlannerComponent = (function () {
    function PerksPlannerComponent(perkResource, currentPlayerModel) {
        var _this = this;
        this.allPerks = [];
        this.currentPerks = [];
        this.availablePerks = [];
        this.blockedPerks = [];
        this.dislikePerks = [];
        this.dependeciesList = [];
        this.perkResource = perkResource;
        this.playerModel = currentPlayerModel;
        this.loadPerks();
        this.playerModel.onChanges(function () {
            _this.sortPerks();
        });
    }
    PerksPlannerComponent.prototype.loadPerks = function () {
        var _this = this;
        this.perkResource.find()
            .then(function (perkList) {
            _this.allPerks = perkList;
            _this.sortPerks();
        });
    };
    PerksPlannerComponent.prototype.onPerkLike = function (playerPerk) {
        this.playerModel.like(playerPerk.perk);
    };
    PerksPlannerComponent.prototype.onPerkDislike = function (playerPerk) {
        console.log('dislike');
        this.playerModel.dislike(playerPerk.perk);
    };
    PerksPlannerComponent.prototype.onPerkCurrent = function (playerPerk) {
        console.log('current');
        this.playerModel.current(playerPerk.perk);
    };
    PerksPlannerComponent.prototype.onPerkUncurrent = function (playerPerk) {
        this.playerModel.uncurrent(playerPerk.perk);
    };
    PerksPlannerComponent.prototype.onChanges = function (change) {
        console.log('change', change);
    };
    PerksPlannerComponent.prototype.getDependeciesList = function () {
        var _this = this;
        var dependencyList = [];
        this.playerModel.desiredPerks.forEach(function (desiredPerk) {
            _this.allPerks.forEach(function (perk) {
                if (desiredPerk.name === perk.name && !_this.playerHasPerk(perk)) {
                    if (perk.rank < desiredPerk.rank) {
                        dependencyList.push(perk);
                    }
                }
            });
        });
        // this.allPerks.forEach(availablePerk => {
        //     this.allPerks.forEach(availablePerkCompare => {
        //         if (availablePerk.name === 'Big Leagues') {
        //             console.log(availablePerk, availablePerkCompare);
        //         }
        //         if (availablePerk.name === availablePerkCompare.name && !this.playerHasPerk(availablePerkCompare) && !this.playerHasPerk(availablePerkCompare)) {
        //             if (availablePerkCompare.rank > availablePerk.rank) {
        //                 if (availablePerk.name === 'Big Leagues') {
        //                     console.log('pushed compare');
        //                 }
        //                 dependencyList.push(availablePerkCompare);
        //             }
        //         }
        //     });
        // });
        return dependencyList;
    };
    PerksPlannerComponent.prototype.playerHasPerk = function (perk) {
        for (var i = this.playerModel.currentPerks.length - 1; i >= 0; i--) {
            if (this.playerModel.currentPerks[i].idInternal === perk.idInternal) {
                return true;
            }
        }
        return false;
    };
    PerksPlannerComponent.prototype.sortPerks = function () {
        var _this = this;
        this.currentPerks = [];
        this.availablePerks = [];
        this.blockedPerks = [];
        this.dislikePerks = [];
        this.dependeciesList = this.getDependeciesList();
        this.allPerks.forEach(function (perk) {
            var userPerk = new PerkModel_1.PlayerPerk(perk, _this.playerModel, _this.allPerks, _this.dependeciesList);
            if (userPerk.isCurrent()) {
                _this.currentPerks.push(userPerk);
            }
            else if (userPerk.isAvailable()) {
                _this.availablePerks.push(userPerk);
            }
            else if (userPerk.isBlocked()) {
                _this.blockedPerks.push(userPerk);
            }
            else if (userPerk.isDislike()) {
                _this.dislikePerks.push(userPerk);
            }
            else {
                throw new Exception('Unknown list for perk: ' + userPerk.perk.name);
            }
        });
        this.orderPerks(this.currentPerks);
        this.orderPerks(this.availablePerks);
        this.orderPerks(this.blockedPerks);
        this.orderPerks(this.dislikePerks);
    };
    PerksPlannerComponent.prototype.orderPerks = function (perksList) {
        perksList.forEach(function (item, index) {
            var isPreferable = item.isPreferable() ? 9000 : 1000;
            var isDependency = item.isDependency() ? 900 : 100;
            var level = 90 - item.perk.characterLevel;
            //const level = 0;
            item.order = isPreferable + isDependency + level;
        });
        perksList.sort(function (a, b) {
            if (a.order > b.order) {
                return -1;
            }
            else if (a.order < b.order) {
                return 1;
            }
            return 0;
        });
    };
    PerksPlannerComponent = __decorate([
        core_1.Component({
            selector: 'perks-planner',
            providers: [PerkModel_1.PerkResource]
        }),
        core_1.View({
            template: "\n            <h1 class=\"uk-article-title\">\n                <h1>Perks Planner</h1>\n            </h1>\n            <!-- This is the tabbed navigation containing the toggling elements -->\n            <ul class=\"uk-tab\" data-uk-tab=\"{connect:'#my-id'}\">\n                <li><a href=\"\">Available</a></li>\n                <li><a href=\"\">Blocked</a></li>\n                <li><a href=\"\">Dislike</a></li>\n                <li><a href=\"\">Current</a></li>\n            </ul>\n\n            <!-- This is the container of the content items -->\n            <ul id=\"my-id\" class=\"uk-switcher uk-margin\">\n                <li><perks-planner-table [perks]=\"availablePerks\" name=\"Available Perks\" (like)=\"onPerkLike($event)\" (uncurrent)=\"onPerkUncurrent($event)\" (dislike)=\"onPerkDislike($event)\" (current)=\"onPerkCurrent($event)\"></perks-planner-table></li>\n                <li><perks-planner-table [perks]=\"blockedPerks\" name=\"Blocked Perks\" (like)=\"onPerkLike($event)\" (uncurrent)=\"onPerkUncurrent($event)\" (dislike)=\"onPerkDislike($event)\" (current)=\"onPerkCurrent($event)\"></perks-planner-table></li>\n                <li><perks-planner-table [perks]=\"dislikePerks\" name=\"Dislike Perks\" (like)=\"onPerkLike($event)\" (uncurrent)=\"onPerkUncurrent($event)\" (dislike)=\"onPerkDislike($event)\" (current)=\"onPerkCurrent($event)\"></perks-planner-table></li>\n                <li><perks-planner-table [perks]=\"currentPerks\" name=\"Current Perks\" (like)=\"onPerkLike($event)\" (uncurrent)=\"onPerkUncurrent($event)\" (dislike)=\"onPerkDislike($event)\" (current)=\"onPerkCurrent($event)\"></perks-planner-table></li>\n            </ul>\n    ",
            directives: [PerksPlannerTableComponent_1.PerksPlannerTableComponent]
        }),
        __param(0, core_1.Inject(PerkModel_1.PerkResource)),
        __param(1, core_1.Inject(PlayerModel_1.CurrentPlayerModel))
    ], PerksPlannerComponent);
    return PerksPlannerComponent;
})();
exports.PerksPlannerComponent = PerksPlannerComponent;
