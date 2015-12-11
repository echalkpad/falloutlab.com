///<reference path="../../bower_components/angular2/angular2.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var angular2_1 = require('angular2/angular2');
var PerksPlannerTableComponent = (function () {
    function PerksPlannerTableComponent() {
        this.like = new angular2_1.EventEmitter();
        this.dislike = new angular2_1.EventEmitter();
        this.current = new angular2_1.EventEmitter();
        this.uncurrent = new angular2_1.EventEmitter();
    }
    PerksPlannerTableComponent.prototype.onLikeClick = function (playerPerk) {
        this.like.next(playerPerk);
    };
    PerksPlannerTableComponent.prototype.onDislikeClick = function (playerPerk) {
        this.dislike.next(playerPerk);
    };
    PerksPlannerTableComponent.prototype.onCurrentClick = function (playerPerk) {
        this.current.next(playerPerk);
    };
    PerksPlannerTableComponent.prototype.onUnCurrentClick = function (playerPerk) {
        this.uncurrent.next(playerPerk);
    };
    PerksPlannerTableComponent = __decorate([
        angular2_1.Component({
            selector: 'perks-planner-table',
            properties: ['perks', 'name'],
            events: ['like: like', 'dislike: dislike', 'current: current', 'uncurrent: uncurrent']
        }),
        angular2_1.View({
            template: "\n        <h3>{{name}}</h3>\n        <ul class=\"uk-list uk-list-line uk-list-striped\">\n           <li *ngFor=\"#playerPerk of perks\">\n           <div class=\"uk-grid\">\n                <div class=\"uk-width-5-10\">\n                    <b>{{ playerPerk.perk.name }}</b>\n                    <br/>\n                    <span class=\"uk-badge uk-badge-success\" *ngIf=\"playerPerk.isPreferable()\">desirable</span>\n                    <span class=\"uk-badge uk-badge-danger\" *ngIf=\"playerPerk.isDislike()\">dislike</span>\n                    <!--span class=\"uk-badge uk-badge-warning\" *ngIf=\"playerPerk.isBlocked()\">blocked</span-->\n                    <span class=\"uk-badge uk-badge-warning\" *ngIf=\"! playerPerk.fitRank()\">level: {{playerPerk.perk.characterLevel}}</span>\n                    <span class=\"uk-badge uk-badge-warning\" *ngIf=\"! playerPerk.fitSpecial()\"> {{playerPerk.perk.attribute}}: {{playerPerk.perk.attributeLevel}}</span>\n                    <span class=\"uk-badge uk-badge-warning\" *ngIf=\"playerPerk.isDependency()\">dependency</span>\n                </div>\n                <div class=\"uk-width-5-10 uk-clearfix\">\n                <div class=\"uk-float-right\">\n                    <div class=\"uk-button-group\">\n                        <a class=\"uk-button uk-button-small uk-button-success\" *ngIf=\"!playerPerk.isPreferable() && ! playerPerk.isCurrent()\" (click)=\"onLikeClick(playerPerk)\">Like</a>\n                        <a class=\"uk-button uk-button-small uk-button-danger\" *ngIf=\"! playerPerk.isCurrent() && ! playerPerk.isDislike() && ! playerPerk.isDependency()\" (click)=\"onDislikeClick(playerPerk)\">Dislike</a>\n                        <a class=\"uk-button uk-button-small uk-button-primary\" *ngIf=\"! playerPerk.isCurrent() &&  ! playerPerk.isBlocked()\" (click)=\"onCurrentClick(playerPerk)\">I have it</a>\n                        <a class=\"uk-button uk-button-small\" *ngIf=\"playerPerk.isCurrent()\" (click)=\"onUnCurrentClick(playerPerk)\">I don't have it</a>\n                    </div>\n                </div>\n                </div>\n            </div>\n            {{ playerPerk.perk.description }}\n           </li>\n        </ul>\n    ",
            directives: [angular2_1.NgFor, angular2_1.NgIf]
        })
    ], PerksPlannerTableComponent);
    return PerksPlannerTableComponent;
})();
exports.PerksPlannerTableComponent = PerksPlannerTableComponent;
