import { Injectable } from '@angular/core';
import { Poll } from './poll';
import { Vote } from './vote';
import {PollProvider} from './poll-provider';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class InMemoryPollProvider extends PollProvider {
    private _db:{[idx:string]:Poll};
    constructor(){       
        super();        
         this._db={};
    }

    public save(poll: Poll) {
        this._db[poll.name]=clone(poll);
    };
    public vote(poll: Poll, vote: Vote) {
        let dbPoll = this._db[poll.name];
        if(dbPoll){
            let votes = dbPoll.votes||[];
            votes.push(clone(vote));
            dbPoll.votes=votes;
        }
    };
    public getPoll(name: string) :Observable<Poll>{
        let obs=Observable;
        return new BehaviorSubject(this._db[name]);        
    };
    public getVotesFor(pollName: string) :Observable<Vote[]> {
         return new BehaviorSubject(this._db[pollName].votes||[]);
    };
}

function clone(obj):any{
   return JSON.parse(JSON.stringify(obj));
}