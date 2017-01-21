import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: 'home',
    templateUrl: './home.html',
    styles:[`
        :host{
            display:flex;
            justify-content:center;
        }
        .content{
            display:flex;
            padding:1em;
        }
    `
    ]
})
export class HomeComponent {
    public pollName: string

    constructor(private _router: Router) { }
    public openPoll() {
        this._router.navigate([`/vote/${this.pollName}`]);
    }
    public newPoll() {
        this._router.navigate(['/new']);
    }
}