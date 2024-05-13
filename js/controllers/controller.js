export class Controller extends Notify{
    #counter;
    constructor(){
        super();
        this.#counter = new Counter();
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
