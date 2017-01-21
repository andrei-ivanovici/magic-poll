import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Poll } from './../domain/poll';
import { Vote } from './../domain/vote';
import {Observable} from 'rxjs/Observable';

@Injectable()
export abstract class PollProvider {    
    public abstract save(poll: Poll);
    public abstract vote(poll: Poll, vote: Vote); 
    public abstract getPoll(name: string) :Observable<Poll> ;
    public abstract getVotesFor(pollName: string): Observable<Vote[]>; 
}