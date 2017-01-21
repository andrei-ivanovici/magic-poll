import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PollProvider } from './../../domain/poll-provider';
import { Subscription } from 'rxjs/Subscription';
import { Poll } from './../../domain/poll';
import * as _ from 'lodash';

@Component({
    selector: 'poll-result',
    templateUrl: './view-results.html',
    styles: [
        `
        :host{
            display:flex;
            justify-content:center;
        }
        .chart{
            width:100%
        }
        `
    ]
})
export class PollResultsComponent {
    public chart;
    private _subscription: Subscription;
    public poll;
    constructor(private _provider: PollProvider,
        private _router: Router,
        private _activatedRoute: ActivatedRoute) {
        this._subscription = this._activatedRoute.params.flatMap(params => {
            return this._provider.getPoll(params['pollname']);
        }).subscribe(poll => {
            this.poll = poll;
            this.chart = {
                id: 'poll-result',
                data: this.computeData(poll),
                height: 400,
                width: "100%"
            }
        })
    }

    private computeData(poll: Poll) {
        let votes = Object.keys(poll.votes).map(k => poll.votes[k]);
        let values = poll.options.map(o => votes.filter(v => v.optionId == o.id).length);
        let labels = poll.options.map(o => o.description);

        return {
            type: 'hbar',
            plotarea: {
                adjustLayout: true
            },
            series: [{
                values
            }],
            "scale-x": {
                labels
            },

        }
    }
    public ngOnDestroy() {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
    }
}