import {Observer} from '../patern/observer.js';

export class View extends Observer{
    #controller;
    constructor(controller){
        super();
        this.#controller = controller;
        this.#controller.addObserver(this);
        document.getElementById('btn-increment').addEventListener('click', this.#controller.incrementCounter);
        document.getElementById('btn-decrement').addEventListener('click', this.#controller.decrementCounter);
    }
    notify(){
        document.getElementById('txt-counter').innerText = this.#controller.counterValue;   
    }

}