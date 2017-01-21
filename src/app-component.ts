import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: 'app',
    templateUrl: './app-component.html',
    styles: [`
    .toolbar{
            display: flex;
            flex-grow: 1;
            flex-direction: row;
            justify-content: space-between;
    }
    .content{
            display:block;
            padding:1em;
        }
    .go-home{
        cursor:pointer;
    }
    `]
})
export class AppComponent {
    constructor(private _router: Router) {

    }
    public goHome() {
        this._router.navigate(['/']);
    }
}