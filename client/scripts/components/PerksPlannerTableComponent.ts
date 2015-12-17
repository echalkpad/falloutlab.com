///<reference path="../../bower_components/angular2/angular2.d.ts" />

import {Component, View, EventEmitter} from 'angular2/core';
import {PlayerPerk} from '../models/PerkModel';

@Component({
    selector: 'perks-planner-table',
    properties: ['perks', 'name'],
    events: ['like: like', 'dislike: dislike', 'current: current', 'uncurrent: uncurrent']
})

@View({
    template: `
        <h3>{{name}}</h3>
        <ul class="uk-list uk-list-line uk-list-striped">
           <li *ngFor="#playerPerk of perks">
           <div class="uk-grid">
                <div class="uk-width-5-10">
                    <b>{{ playerPerk.perk.name }}</b>
                    <br/>
                    <span class="uk-badge uk-badge-success" *ngIf="playerPerk.isPreferable()">desirable</span>
                    <span class="uk-badge uk-badge-danger" *ngIf="playerPerk.isDislike()">dislike</span>
                    <!--span class="uk-badge uk-badge-warning" *ngIf="playerPerk.isBlocked()">blocked</span-->
                    <span class="uk-badge uk-badge-warning" *ngIf="! playerPerk.fitRank()">level: {{playerPerk.perk.characterLevel}}</span>
                    <span class="uk-badge uk-badge-warning" *ngIf="! playerPerk.fitSpecial()"> {{playerPerk.perk.attribute}}: {{playerPerk.perk.attributeLevel}}</span>
                    <span class="uk-badge uk-badge-warning" *ngIf="playerPerk.isDependency()">dependency</span>
                </div>
                <div class="uk-width-5-10 uk-clearfix">
                <div class="uk-float-right">
                    <div class="uk-button-group">
                        <a class="uk-button uk-button-small uk-button-success" *ngIf="!playerPerk.isPreferable() && ! playerPerk.isCurrent()" (click)="onLikeClick(playerPerk)">Like</a>
                        <a class="uk-button uk-button-small uk-button-danger" *ngIf="! playerPerk.isCurrent() && ! playerPerk.isDislike() && ! playerPerk.isDependency()" (click)="onDislikeClick(playerPerk)">Dislike</a>
                        <a class="uk-button uk-button-small uk-button-primary" *ngIf="! playerPerk.isCurrent() &&  ! playerPerk.isBlocked()" (click)="onCurrentClick(playerPerk)">I have it</a>
                        <a class="uk-button uk-button-small" *ngIf="playerPerk.isCurrent()" (click)="onUnCurrentClick(playerPerk)">I don't have it</a>
                    </div>
                </div>
                </div>
            </div>
            {{ playerPerk.perk.description }}
           </li>
        </ul>
    `
})

export class PerksPlannerTableComponent {
    name: string;
    perks: Array<PlayerPerk>;
    like = new EventEmitter();
    dislike = new EventEmitter();
    current = new EventEmitter();
    uncurrent = new EventEmitter();

    constructor() {}

    onLikeClick(playerPerk: PlayerPerk) {
        this.like.next(playerPerk);
    }

    onDislikeClick(playerPerk: PlayerPerk) {
        this.dislike.next(playerPerk);
    }

    onCurrentClick(playerPerk: PlayerPerk) {
        this.current.next(playerPerk);
    }


    onUnCurrentClick(playerPerk: PlayerPerk) {
        this.uncurrent.next(playerPerk);
    }
}
