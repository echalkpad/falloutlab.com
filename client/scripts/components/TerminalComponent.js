///<reference path="../../bower_components/angular2/angular2.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('angular2/core');
var TerminalComponent = (function () {
    function TerminalComponent() {
        this.words = [];
        this.wordLength = 0;
        this.buttonList = [];
        this.inputLength = 0;
    }
    TerminalComponent.prototype.showButtons = function () {
        var buttons = this.buttons();
        if (!buttons) {
            return;
        }
        return buttons.length > 0;
    };
    TerminalComponent.prototype.delete = function (word) {
        if (this.words.length === 1) {
            this.clear();
        }
        var newArray = [];
        this.words.forEach(function (item, index) {
            if (word.id !== index) {
                item.id = newArray.length;
                newArray.push(item);
            }
        });
        this.words = newArray;
    };
    TerminalComponent.prototype.clear = function (searchelement) {
        if (searchelement === void 0) { searchelement = null; }
        this.words = [];
        if (searchelement) {
            searchelement.value = '';
        }
        //        this.buttons = [];
        this.wordLength = 0;
    };
    TerminalComponent.prototype.onTopButtonClick = function (text, button) {
        var word = this.addWord(text);
        if (word) {
            this.onButtonClick(word, button);
        }
    };
    TerminalComponent.prototype.isPossible = function (word) {
        var _this = this;
        var isPossible = true;
        word = word.toUpperCase();
        this.words.forEach(function (previous) {
            if (!isPossible || previous.lettersIn == null) {
                return;
            }
            if (previous.text === word) {
                isPossible = previous.lettersIn === _this.wordLength;
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
    };
    TerminalComponent.prototype.buttonColor = function (word, button) {
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
    };
    TerminalComponent.prototype.checkStatus = function (text, key) {
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
    };
    TerminalComponent.prototype.onButtonClick = function (word, button) {
        if (button.id === -1) {
            return this.words[word.id].lettersIn = null;
        }
        var buttons = this.buttons();
        this.words[word.id].lettersIn = buttons[button.id].id;
    };
    TerminalComponent.prototype.buttons = function (word) {
        if (word === void 0) { word = ''; }
        this.inputLength = word.length;
        if (!word && this.words.length === 0) {
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
        this.buttonList = buttons;
        return this.buttonList;
    };
    TerminalComponent.prototype.addWord = function (element) {
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
    };
    TerminalComponent.prototype.doneTyping = function ($event) {
        if ($event.which === 13) {
            this.addWord($event.target.value);
            $event.target.value = null;
        }
    };
    TerminalComponent = __decorate([
        core_1.Component({
            selector: 'terminal'
        }),
        core_1.View({
            template: "\n            <h1>Terminal Unlock / Hack</h1>\n            <blockquote>Just input first word in the input field below and you will see options for that word.</blockquote>\n            <div>\n                <h4>Check an entry: <button class=\"uk-button uk-button-danger\" *ngIf=\"wordLength > 0\" (click)=\"clear(inputword)\">Clear all</button></h4>\n                <div class=\"uk-form\">\n                    <fieldset>\n                        <div>\n                        <fieldset class=\"uk-form\">\n                            <input #inputword (keyup)=\"doneTyping($event)\" (keyup)=\"buttons(inputword.value)\" placeholder=\"Add first word here...\" class=\"uk-form-width-medium\">\n                        </fieldset>\n                        <span *ngIf=\"buttonList.length > 0\" class=\"{{checkStatus(inputword.value, 'color')}}\">{{checkStatus(inputword.value, 'text')}}</span>\n                        </div>\n                        <div *ngIf=\"buttonList && inputword.value && (buttonList.length == 0 || buttonList.length == inputLength + 1)\">How many correct letters? <br />\n                        <span *ngFor=\"#button of buttonList\" ><button (click)=\"onTopButtonClick(inputword, button)\" class=\"uk-button\">{{button.name}}</button>&nbsp;</span>\n                        <span *ngIf=\"buttonList\"><button class=\"uk-button uk-button-primary\" (click)=\"addWord(inputword)\">Skip</button></span>\n                        </div>\n                    </fieldset>\n                 </div>\n                 <h4>History:</h4>\n                <ul class=\"uk-list\">\n                   <li *ngFor=\"#word of words\">\n                   <div class=\"uk-grid\">\n                        <div class=\"uk-width-2-10\"><b>{{ word.text }}</b></div>\n                        <div class=\"uk-width-5-10\"><span *ngFor=\"#button of buttonList\" ><button (click)=\"onButtonClick(word, button)\" class=\"uk-button {{buttonColor(word, button)}}\">{{button.name}}</button> </span></div>\n                        <div class=\"uk-width-2-10 {{checkStatus(word.text, 'color')}}\">{{checkStatus(word.text, 'text')}}</div>\n                        <div class=\"uk-width-1-10\"><button class=\"uk-button uk-button-danger\" (click)=\"delete(word)\">delete</button></div>\n                    </div>\n                   </li>\n                </ul>\n            </div>\n    "
        })
    ], TerminalComponent);
    return TerminalComponent;
})();
exports.TerminalComponent = TerminalComponent;
