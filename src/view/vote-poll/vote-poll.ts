import { Component } from '@angular/core';
import { PollProvider } from './../../domain/poll-provider';
import { Option } from './../../domain/option';
import { Vote } from './../../domain/vote';
import { Poll } from './../../domain/poll';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/mergeMap';
import { Subscription } from 'rxjs/Subscription';
@Component({
    selector: 'vote-poll',
    templateUrl: './vote-poll.html',
    styles:[`
        :host{
            display:flex;
            justify-content:center;            
        }
        .my-card{
            min-width:500px;
        }
        .item{
            margin-left:1em;
            display:flex;
            align-items:center;
            justify-content:space-between;
        }`]
})
export class VotePollComponent {
    public currentPoll: Poll;
    private _subscription: Subscription;
    constructor(private _provider: PollProvider,
        private _router: Router,
        private _activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        let obs= this._activatedRoute.params.flatMap(params => {
            return this._provider.getPoll(params['pollname']);
        });
        this._subscription =obs.subscribe(poll => {
            this.currentPoll = poll;
        })
    }
    public vote(option: Option) {
        this._provider.vote(this.currentPoll, new Vote(option.id));
        this._router.navigate(['./result', this.currentPoll.name])
    }
    ngOnDestroy() {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
    }
}