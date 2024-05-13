export class Counter {
    #value;
    constructor() {
        this.#value = 0;
    }

    incrementValue() {
        this.counter++;
    }

    decrementValue() {
        this.counter--;
    }

    get value() {
        return this.#value;
    }
}
