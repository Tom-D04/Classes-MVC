# Classes-MVC

## OBJECTIFS 

Découvrir : 

      ▪ l’utilisation des modules ES6
      ▪ les classes en JavaScript
      ▪ le patron de conception Sujet/Observateur
      ▪ l’architecture Modèle/Vue/Contrôleur

### Class Counter

Le code que j'ai utilisé pour la classe Counter qui s'occupe seulement de stocker la valeur du compteur et de l'incrémenter ou décrémenter quand demandé grâce à deux méthodes est le suivant. L'utilisation de `parseInt()` permet de récupérer un int à partir d'une chaîne de caractère (car c'est une chaîne de caractère qui est affichée sur la page HTML).

```
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
```
Cette classe représente le 'modèle' dans l'architecture MVC c'est elle qui gères les données (valeur du compteur) propres au modèle et la logique métier (incrmentation et décrémentation) du modèle.

### Class Controller

Cette classe permet uniquement de visualiser les données de la classe Counter, cela passe par la création d'un `observer` qui "s'abonne" à la valeur du compteur et est informée de chaque changement de celui-ci. La gestion des `observer` passe par la classe `Observer`. C'est la 'vue' dans l'architecture MVC.

```
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
```

### Class Controller

Cette classe s'occupe de "demander" tous les changements faits par l'utilisateur au modèle (par exemple incrémenter le compteur) et de retourner le résultat de l'action à la vue, c'est pour cela qu'à chaque fois qu'on incrémente le compteur, on utilise la fonction `notify()` de la classe `Notifier`. Elle s'occupe aussi de récupérer la valeur du compteur pour la vue. C'est le controlleur dans l'architecture MVC et il fait le lien entre la vue et le modèle.

```
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
```

## Résultat final

Le code implémenté nous permet bien d'afficher un compteur que l'on peut incrémenter et décrémenter autant que l'on souhaite : 

![image](https://github.com/Tom-D04/Classes-MVC/assets/84025296/d9b049f2-fa42-423f-93cb-89a0b6c4f15a)


*Dunand Tom, 3A - IE - TD4*
