import { HomeComponent } from './home/home';
import { NewPollComponent } from './new-poll/new-poll';
import { VotePollComponent } from './vote-poll/vote-poll';
import { ZingChart } from './bar-chart/zingchart.component'
import { PollResultsComponent } from './view-results/view-results'

export { HomeComponent, NewPollComponent, VotePollComponent, PollResultsComponent };
export const VIEWS = [HomeComponent, NewPollComponent, VotePollComponent, ZingChart, PollResultsComponent];