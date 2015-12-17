///<reference path='../bower_components/angular2/bundles/typings/angular2/angular2.d.ts' />
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
var router_1 = require('angular2/router');
var HomeController_1 = require('./controllers/HomeController');
var PerksPlannerController_1 = require('./controllers/PerksPlannerController');
var CheatCodesController_1 = require('./controllers/CheatCodesController');
var PlayerModel_1 = require('./models/PlayerModel');
var PlayerStatsComponent_1 = require('./components/PlayerStatsComponent');
var App = (function () {
    function App(currentPlayerModel, playerResource) {
        var _this = this;
        this.playerModel = currentPlayerModel;
        this.playerResource = playerResource;
        var fromLocalStorageId = localStorage.getItem('currentPlayerId');
        if (fromLocalStorageId) {
            this.loadByEmail(JSON.parse(fromLocalStorageId))
                .then(function (record) {
                _this.playerModel.setData(record);
            }).catch(function (err) {
                console.log(err);
            });
        }
        this.playerModel.onChanges(function () {
            if (!_this.playerModel.userId) {
                return;
            }
            if (_this.playerModel.id) {
                _this.playerResource.upsert(_this.playerModel)
                    .then(function (record) {
                    _this.playerModel.setData(record);
                    localStorage.setItem('currentPlayerId', JSON.stringify(record.userId));
                });
            }
            else {
                _this.loadByEmail(_this.playerModel.userId)
                    .then(function (record) {
                    if (record) {
                        localStorage.setItem('currentPlayerId', JSON.stringify(record.userId));
                        _this.playerModel.setData(record);
                        _this.playerModel.updated();
                    }
                    else {
                        _this.playerResource.upsert(_this.playerModel)
                            .then(function (record) {
                            _this.playerModel.setData(record);
                            localStorage.setItem('currentPlayerId', JSON.stringify(record.userId));
                        });
                    }
                }).catch(function (err) {
                    console.log(err);
                });
            }
        });
        this.playerModel = currentPlayerModel;
    }
    App.prototype.loadByEmail = function (email) {
        return this.playerResource.find({
            where: {
                userId: email
            }
        }).then(function (record) {
            if (record[0].id) {
                return record[0];
            }
        });
    };
    App = __decorate([
        router_1.RouteConfig([
            { path: '/', as: 'HomeController', component: HomeController_1.HomeController },
            { path: '/perks', as: 'PerksPlannerController', component: PerksPlannerController_1.PerksPlannerController },
            { path: '/cheatcodes', as: 'CheatCodesController', component: CheatCodesController_1.CheatCodesController }
        ]),
        core_1.Component({
            selector: 'my-app',
            providers: [PlayerStatsComponent_1.PlayerStatsComponent, PlayerModel_1.CurrentPlayerModel, PlayerModel_1.PlayerResource]
        }),
        core_1.View({
            templateUrl: 'views/app.html',
            directives: [[router_1.ROUTER_DIRECTIVES], PlayerStatsComponent_1.PlayerStatsComponent]
        }),
        __param(0, core_1.Inject(PlayerModel_1.CurrentPlayerModel)),
        __param(1, core_1.Inject(PlayerModel_1.PlayerResource))
    ], App);
    return App;
})();
exports.App = App;
