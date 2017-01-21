import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Poll } from './../../domain/poll';
import { Option } from './../../domain/option';
import { PollProvider } from './../../domain/poll-provider';
@Component({
    selector: 'new-poll',
    templateUrl: './new-poll.html',
    styles:[
        `:host{
            display:flex;
            justify-content:center;
        }
         .answer{
             margin-left:1em;
         }
        `

    ]
})
export class NewPollComponent {
    public pollName: string;
    public description: string;
    poll: Poll;

    constructor(private _pollProivder: PollProvider, private _router: Router) {
        this.poll = new Poll();
        this.poll.options.push(new Option());
    }

    public addOption() {
        this.poll.options.push(new Option());
    }
    public deleteOption(option: Option) {
        let index = this.poll.options.indexOf(option);
        if (index >= 0) {
            this.poll.options.splice(index, 1);
        }
    }

    public save() {
        this._pollProivder.save(this.poll);
        this._router.navigate(['/vote', this.poll.name]);

    }
}