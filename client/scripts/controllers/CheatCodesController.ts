///<reference path="../../bower_components/angular2/bundles/typings/angular2/angular2.d.ts" />

import {Component, View} from 'angular2/angular2';

@Component({
})

@View({
    template: `
        <div>
            <h1>Cheat Codes</h1>
            <blockquote>While playing the game, press <b>~</b> to display the console window.</blockquote>
            <table class="uk-table uk-table-striped uk-table-hover">
            <thead>
            <tr><th><b> Result </b></th>
            <th><b> Cheat Code </b></th>
            </tr>
            </thead>
            <tbody>
            <tr><td>God mode</td><td> <b>tgm</b></td></tr>
            <tr><td>Invincibility to damage</td><td> <b>tdm</b></td></tr>
            <tr><td>Gain one level</td><td> <b>player.advlevel</b></td></tr>
            <tr><td>Set level</td><td> <b>player.setlevel</b> [level]</td></tr>
            <tr><td>Toggle no clipping</td><td> <b>tcl</b></td></tr>
            <tr><td>Buddha mode</td><td> <b>tim </b></td></tr>
            <tr><td>Show all places on map</td><td> <b>tmm 1 </b></td></tr>
            <tr><td>Full health but radiation remains</td><td> <b>player.resethealth</b></td></tr>
            <tr><td>Kill targeted NPC</td><td> <b>kill </b></td></tr>
            <tr><td>Set "carryweight" variable</td><td> <b>player.modav carryweight</b> [number]</td></tr>
            <tr><td>Toggle AI</td><td> <b>tai </b></td></tr>
            <tr><td>AI completely ignores you</td><td> <b>tdetect</b></td></tr>
            <tr><td>Toggle attacks from NPCs</td><td> <b>tcai </b></td></tr>
            <tr><td>Resurrects targeted NPC</td><td> <b>resurrect</b></td></tr>
            <tr><td>Resurrect indicated creature everywhere</td><td> <b>resurrect</b> [id]</td></tr>
            <tr><td>Kill indicated creature everywhere</td><td> <b>kill</b> [id]</td></tr>
            <tr><td>Fully activate all Pip-Boy map markers</td><td> <b>tmm 1</b></td></tr>
            <tr><td>Kill all NPCs and creatures in the area</td><td> <b>killall</b></td></tr>
            <tr><td>Complete every part of main storyline</td><td> <b>caqs</b></td></tr>
            <tr><td>Teleport to cheat room with boxes containing every item</td><td> <b>coc qasmoke</b></td></tr>
            <tr><td>Teleport to indicated cell</td><td> <b>coc</b> [cell edid]</td></tr>
            <tr><td>View targeted companion's affinity to you; maximum is over 1,000</td><td> <b>getav CA_affinity</b></td></tr>
            <tr><td>Set targeted companion's affinity; will not take effect until next affinity change</td><td> <b>modav CA_affinity</b> [number]</td></tr>
            <tr><td>View ID of indicated object</td><td> <b>help</b> [text]</td></tr>
            <tr><td>Add item to your inventory</td><td> <b>player.additem</b> [object id] [amount]</td></tr>
            <tr><td>Lists inventory with object IDs</td><td> <b>player.showinventory</b> or <b>player.inv</b></td></tr>
            <tr><td>Equip item from the inventory</td><td> <b>player.equipitem</b> [object id]</td></tr>
            <tr><td>Change your character's gender</td><td> <b>sexchange</b></td></tr>
            <tr><td>Set minimum jump height</td><td> <b>setgs fJumpHeightMin</b> [number]</td></tr>
            <tr><td>Set running speed multiplier</td><td> <b>player.setav speedmult</b> [number]</td></tr>
            <tr><td>Set actor value to specific amount</td><td> <b>player.setav</b> [variable] [amount]</td></tr>
            <tr><td>Modify an actor value</td><td> <b>player.modav</b> [variable] [amount]</td></tr>
            <tr><td>Set a value</td><td> <b>player.forceav</b> [variable] [amount]</td></tr>
            <tr><td>Advance a point on specific skill branch</td><td> <b>advancepcskill</b> [advskill]</td></tr>
            <tr><td>Set the scale of targeted object</td><td> <b>setScale</b></td></tr>
            <tr><td>Display the scale targeted object</td><td> <b>getScale</b></td></tr>
            <tr><td>Unlock targeted locked object</td><td> <b>unlock</b></td></tr>
            <tr><td>Lock targed object with indicated lockpick difficulty</td><td> <b>lock</b> [number]</td></tr>
            <tr><td>Activate targeted object normally used with a switch</td><td> <b>activate</b></td></tr>
            <tr><td>Delete targeted object</td><td> <b>zap</b></td></tr>
            <tr><td>Permanently delete targeted object</td><td> <b>markfordelete</b></td></tr>
            <tr><td>Set activation state of targeted object; "0" is close and "2" is open</td><td> <b>setopenstate</b> [0 or 2]</td></tr>
            <tr><td>Claim ownership of targeted object</td><td> <b>setownership</b></td></tr>
            <tr><td>Spawn item next to player; stack value of "1" required for some items</td><td> <b>player.placeatme</b> [object id] [stack amount] [quality]</td></tr>
            <tr><td>Move to indicated item within the same location cell</td><td> <b>player.moveto</b> [ref id]</td></tr>
            <tr><td>Set how fast time passes; default is "30"</td><td> <b>set timescale to</b> [scale]</td></tr>
            <tr><td>Set the game hour to indicated value</td><td> <b>set gamehour to</b> [time]</td></tr>
            <tr><td>Set field of view; default is "70"</td><td> <b>fov</b> [number]</td></tr>
            <tr><td>Free-roam camera</td><td> <b>tfc</b></td></tr>
            <tr><td>Toggle visible menus and UI</td><td> <b>tm</b></td></tr>
            <tr><td>Display current game time</td><td> <b>getcurrenttime</b></td></tr>
            <tr><td>View game settings value</td><td> <b>getgs</b> [string]</td></tr>
            <tr><td>Send console output to indicated file</td><td> <b>scof</b> [filename]</td></tr>
            <tr><td>Execute list of commands from text file</td><td> <b>bat</b> [filename]</td></tr>
            <tr><td>Clear console text</td><td> <b>cls</b></td></tr>
            </tbody></table>
        </div>
    `
})

export class CheatCodesController {
    constructor() {
    }
}
