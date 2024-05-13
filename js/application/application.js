import { Counter } from '../models/counter.js'; // './' permet de partir du dossier dans lequel on est et '../' du dossier parent
import { View } from '../views/view.js';
import { Controller } from '../controllers/controller.js';


window.addEventListener('load', function() {
    const controller = new Controller();
    const view = new View(controller);
    const ct1 = new Counter();
    console.log(ct1.value);
});