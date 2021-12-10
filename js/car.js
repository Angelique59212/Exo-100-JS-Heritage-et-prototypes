/**
 * Crèe un objet de type voiture
 * @param color
 * @param wheels
 * @param mark
 * @param assurance
 * @param proprietaire
 */
const Car = function (color, wheels, mark, assurance, proprietaire) {
    Vehicle.call(this, color, wheels,mark);
    this.assurance = assurance;
    this.proprietaire = proprietaire;

    /**
     * Fait aller au car wash
    */
    this.passerAuCarWash = function () {
        console.log("Je pars au Car Wash");
    };
};

Car.prototype = Object.create(Vehicle.prototype);
Car.constructor = Car;