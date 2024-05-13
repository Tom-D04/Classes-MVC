export class Counter {
    #value;
    constructor() {
        this.#value = 0;
    }

    incrementValue() {
        this.#value = parseInt(this.#value) + 1;
    }

    decrementValue() {
        this.#value = parseInt(this.#value) - 1;
    }

    get value() {
        return this.#value;
    }
}
