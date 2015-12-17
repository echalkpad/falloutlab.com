///<reference path="../../bower_components/angular2/angular2.d.ts" />

import {Component, View} from 'angular2/core';

@Component({
    selector: 'terminal'
})

@View({
    template: `
            <h1>Terminal Unlock / Hack</h1>
            <blockquote>Just input first word in the input field below and you will see options for that word.</blockquote>
            <div>
                <h4>Check an entry: <button class="uk-button uk-button-danger" *ngIf="wordLength > 0" (click)="clear(inputword)">Clear all</button></h4>
                <div class="uk-form">
                    <fieldset>
                        <div>
                        <fieldset class="uk-form">
                            <input #inputword (keyup)="doneTyping($event)" placeholder="Add first word here..." class="uk-form-width-medium">
                        </fieldset>
                        <span *ngIf="buttons(inputword.value)" class="{{checkStatus(inputword.value, 'color')}}">{{checkStatus(inputword.value, 'text')}}</span>
                        </div>
                        <div *ngIf="buttons(inputword.value) && inputword.value">How many correct letters?<br />
                        <span *ngFor="#button of buttons(inputword.value)" ><button (click)="onTopButtonClick(inputword, button)" class="uk-button">{{button.name}}</button>&nbsp;</span>
                        <span *ngIf="buttons(inputword.value)"><button class="uk-button uk-button-primary" (click)="addWord(inputword)">Skip</button></span>
                        </div>
                    </fieldset>
                 </div>
                 <h4>History:</h4>
                <ul class="uk-list">
                   <li *ngFor="#word of words">
                   <div class="uk-grid">
                        <div class="uk-width-2-10"><b>{{ word.text }}</b></div>
                        <div class="uk-width-5-10"><span *ngFor="#button of buttons()" ><button (click)="onButtonClick(word, button)" class="uk-button {{buttonColor(word, button)}}">{{button.name}}</button> </span></div>
                        <div class="uk-width-2-10 {{checkStatus(word.text, 'color')}}">{{checkStatus(word.text, 'text')}}</div>
                        <div class="uk-width-1-10"><button class="uk-button uk-button-danger" (click)="delete(word)">delete</button></div>
                    </div>
                   </li>
                </ul>
            </div>
    `
})


export class TerminalComponent {
    words      = [];
    wordLength = 0;

    showButtons() {
        var buttons = this.buttons();

        if (! buttons) {
            return;
        }

        return buttons.length > 0;
    }

    constructor() {}

    delete (word) {
        if (this.words.length === 1) {
            this.clear();
        }

        var newArray = [];
        this.words.forEach((item, index) => {
            if (word.id !== index) {
                item.id = newArray.length;

                newArray.push(item);
            }
        });

        this.words = newArray;
    }

    clear(searchelement = null) {
        this.words = [];

        if (searchelement) {
            searchelement.value = '';
        }
//        this.buttons = [];
        this.wordLength = 0;
    }

    onTopButtonClick(text, button) {
        var word = this.addWord(text);

        if (word) {
            this.onButtonClick(word, button);
        }
    }

    isPossible(word) {
        var isPossible = true;
        word = word.toUpperCase();

        this.words.forEach(previous => {
            if (!isPossible || previous.lettersIn == null) {
                return;
            }

            if (previous.text === word) {
                isPossible = previous.lettersIn === this.wordLength;

                return;
            }

            var lettersIn = previous.lettersIn;
            var currentIn = 0;

            for (var i = 0, len = previous.text.length; i < len; i++) {
                if (previous.text[i] === word[i]) {
                    ++currentIn;
                }
            }

            if (currentIn !== lettersIn) {
                isPossible = false;
            }
        });

        return isPossible;
    }

    buttonColor(word, button) {
        if (word.lettersIn == null) {
            return '';
        }

        if (word.lettersIn !== button.id) {
            return '';
        }

        if (word.lettersIn === 0) {
            return 'uk-button-danger';
        }

        if (word.lettersIn === this.wordLength) {
            return 'uk-button-success';
        }

        return 'uk-button-primary';
    }

    checkStatus(text, key) {
        var result = {
            'ok': {
                'color': 'uk-text-success',
                'text': 'TRY THIS WORD'
            },
            'fail': {
                'color': 'uk-text-danger',
                'text': 'THAT ONE IS INCORRECT'
            },
            'empty': {
                'color': '',
                'text': ''
            }
        };

        if (!this.wordLength) {
            return result.ok[key];
        }

        if (text.length !== this.wordLength) {
            return result.empty[key];
        }

        return this.isPossible(text) ? result.ok[key] : result.fail[key];
    }

    onButtonClick(word, button) {
        if (button.id === -1) {
            return this.words[word.id].lettersIn = null;
        }

        var buttons = this.buttons();

        this.words[word.id].lettersIn = buttons[button.id].id;
    }

    buttons(word = '') {
        if (! word && this.words.length === 0) {
            return;
        }

        if (!word) {
            word = this.words[0].text;
        }

        if (word.length < 3) {
            return;
        }

        if (this.words.length !== 0 && word.length !== this.wordLength) {
            return;
        }

        var buttons = [];

        for (var i = 0, len = word.length; i <= len; i++) {
            buttons.push({
                id: buttons.length,
                name: i
            });
        }

        return buttons;
    }

    addWord(element) {
        var text = element.value;
        element.value = '';

        if (text.length > 2) {
            var word = {
                id: this.words.length,
                text: text.toUpperCase(),
                lettersIn: null
            };

            this.words.push(word);

            if (this.words.length === 1) {
                this.wordLength = text.length;
            }

            return word;
        }

        //     this.buttons.push({
        //         id: -1,
        //         name: 'Clear'
        //     });
        // }
    }

    doneTyping($event) {
        if ($event.which === 13) {
            this.addWord($event.target.value);

            $event.target.value = null;
        }
    }
}
