import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';

import { PollProvider } from './poll-provider';
import { Poll } from './poll';
import { Vote } from './vote';
import {Observable} from 'rxjs/Observable';



@Injectable()
export class FirebasePollProvider extends PollProvider {
    constructor(private _firebase: AngularFire) {
        super();
    }

    public save(poll: Poll) {
        let pollRef = this.getPollInternal(poll.name);
        pollRef.set(poll);
    }

    public vote(poll: Poll, vote: Vote) {
        let votes = this._firebase.database.list(`polls/${poll.name}/votes`)
        votes.push(vote);
    }

    public getPoll(name: string): Observable<Poll> {
        return this.getPollInternal(name);
    }
    public getVotesFor(pollName: string) :Observable<Vote[]> {
        return this._firebase.database.list(`polls/${name}/votes`)
    }

    private getPollInternal(name:string){
        return this._firebase.database.object(`polls/${name}`)
    }
}