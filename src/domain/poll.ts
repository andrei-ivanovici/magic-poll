import { Option } from './option';
import { Vote } from './vote';
export class Poll {
    public name: string
    public description: string

    public options: Array<Option>;
    public votes: Array<Vote>;

    constructor() {        
        this.options = []
        this.votes = [];
    }
}