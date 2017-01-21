import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app-component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './infrastructure/route-config';
import { AppAngularFireModule } from './infrastructure/firebase-config';
import { PollProvider } from './domain/poll-provider';
import { FirebasePollProvider } from './domain/firebase-poll-provider';
import  {InMemoryPollProvider} from './domain/inmemory-pool-provider';
import { VIEWS } from './view';
import { MaterialModule } from '@angular/material';
@NgModule({
    bootstrap: [AppComponent],
    declarations: [AppComponent, ...VIEWS],
    providers: [
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy
        },

        //InMemory DB
        {
            provide: PollProvider,
            useClass: InMemoryPollProvider
        },
        //Firebase DB
        // {
        //     provide: PollProvider,
        //     useClass: FirebasePollProvider
        // }
        ],
    imports: [BrowserModule, FormsModule, AppRouterModule, AppAngularFireModule, MaterialModule.forRoot()]
})
export class AppModule {
}
