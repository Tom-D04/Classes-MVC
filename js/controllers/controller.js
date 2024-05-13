import {Notifier} from '../patern/notifier.js';
import {Counter} from '../models/counter.js';

export class Controller extends Notifier{
    #counter;
    constructor(){
        super();
        this.#counter = new Counter();
        this.incrementCounter = this.incrementCounter.bind(this);
        this.decrementCounter = this.decrementCounter.bind(this);
    }
    incrementCounter(){
        this.#counter.incrementValue();
        this.notify();
    }
    decrementCounter(){
        this.#counter.decrementValue();
        this.notify();
    }
    get counterValue(){
        return this.#counter.value;
    }
}
