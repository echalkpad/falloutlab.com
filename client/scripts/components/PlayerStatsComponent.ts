///<reference path="../../bower_components/angular2/angular2.d.ts" />

import {Component, View, Inject} from 'angular2/core';
import {PlayerModel, CurrentPlayerModel} from '../models/PlayerModel';

@Component({
    selector: 'player-stats'
})

@View({
    templateUrl: 'scripts/components/PlayerStatsComponent.html'
})

export class PlayerStatsComponent {
    playerModel: PlayerModel;

    constructor( @Inject(CurrentPlayerModel) currentPlayerModel: CurrentPlayerModel) {
        this.playerModel = currentPlayerModel;
    }

    onChanges(test) {
        console.log('changes', test);
    }

    onIncrease(type: string) {
        if (this.playerModel[type] === 10) {
            return;
        }

        ++this.playerModel[type];

        this.playerModel.updated();
    }

    onDecrease(type: string) {
        if (this.playerModel[type] === 0) {
            return;
        }

        --this.playerModel[type];

        this.playerModel.updated();
    }

    onRankIncrease(type: string) {
        ++this.playerModel.level;

        this.playerModel.updated();
    }

    onRankDecrease(type: string) {
        if (this.playerModel.level < 1)  {
            return;
        }

        --this.playerModel.level;

        console.log(this.playerModel.level);

        this.playerModel.updated();
    }

    doneTyping($event) {
        if ($event.which === 13) {
            this.playerModel.userId = $event.target.value;

            this.playerModel.updated();
        }
    }

    setUserId(input) {
        this.playerModel.userId = input.value;

        this.playerModel.updated();
    }
}
