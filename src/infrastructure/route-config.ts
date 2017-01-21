import { RouterModule, Route } from '@angular/router'
import { HomeComponent, VotePollComponent, NewPollComponent, PollResultsComponent } from './../view';


export const AppRouterModule = RouterModule.forRoot([{
    path: '',
    component: HomeComponent
},
{
    path: 'new',
    component: NewPollComponent
},
{
    path: 'vote/:pollname',
    component: VotePollComponent
},
{
    path: 'result/:pollname',
    component: PollResultsComponent
}])