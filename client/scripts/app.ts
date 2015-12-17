///<reference path='../bower_components/angular2/bundles/typings/angular2/angular2.d.ts' />

import {Component, View, Inject} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {HomeController}         from './controllers/HomeController';
import {PerksPlannerController} from './controllers/PerksPlannerController';
import {CheatCodesController} from './controllers/CheatCodesController';
import {PlayerModel, CurrentPlayerModel, PlayerResource} from './models/PlayerModel';
import {PlayerStatsComponent}   from './components/PlayerStatsComponent';


@RouteConfig([
    { path: '/', as: 'HomeController', component: HomeController },
    { path: '/perks', as: 'PerksPlannerController', component: PerksPlannerController },
    { path: '/cheatcodes', as: 'CheatCodesController', component: CheatCodesController }
])

@Component({
  selector: 'my-app',
  providers: [PlayerStatsComponent, CurrentPlayerModel, PlayerResource]
})

@View({
    templateUrl: 'views/app.html',
    directives: [[ROUTER_DIRECTIVES], PlayerStatsComponent]
})

export class App {
    playerModel: PlayerModel;
    playerResource: PlayerResource;

    constructor( @Inject(CurrentPlayerModel) currentPlayerModel: CurrentPlayerModel, @Inject(PlayerResource) playerResource: PlayerResource) {
        this.playerModel = currentPlayerModel;
        this.playerResource = playerResource;

        var fromLocalStorageId = localStorage.getItem('currentPlayerId');

        if (fromLocalStorageId) {
            this.loadByEmail(JSON.parse(fromLocalStorageId))
                .then(record => {
                    this.playerModel.setData(record);
                }).catch(err => {
                    console.log(err);
                });
        }

        this.playerModel.onChanges(() => {
            if (! this.playerModel.userId) {
                return;
            }

            if (this.playerModel.id) {
                this.playerResource.upsert(this.playerModel)
                    .then((record: CurrentPlayerModel) => {
                        this.playerModel.setData(record);

                        localStorage.setItem('currentPlayerId', JSON.stringify(record.userId));
                    });
            } else {
                this.loadByEmail(this.playerModel.userId)
                    .then(record => {
                        if (record) {
                            localStorage.setItem('currentPlayerId', JSON.stringify(record.userId));

                            this.playerModel.setData(record);

                            this.playerModel.updated();
                        } else {
                            this.playerResource.upsert(this.playerModel)
                                .then((record: CurrentPlayerModel) => {
                                    this.playerModel.setData(record);

                                    localStorage.setItem('currentPlayerId', JSON.stringify(record.userId));
                                });
                        }
                    }).catch(err => {
                        console.log(err);
                    });
            }
        });

        this.playerModel = currentPlayerModel;
    }

    loadByEmail (email: string) {
        return this.playerResource.find({
            where: {
                userId: email
            }
        }).then((record: Array<CurrentPlayerModel>) => {
            if (record[0].id) {
                return record[0];
            }
        });
    }
}
