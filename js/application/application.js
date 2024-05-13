import { Counter } from '../models/counter.js'; // './' permet de partir du dossier dans lequel on est et '../' du dossier parent

window.addEventListener('load', function() {
    const ct1 = new Counter();
    console.log(ct1.value);
});