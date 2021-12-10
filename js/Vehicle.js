/**
 * Crèe un objet de type véhicule
 * @param color
 * @param wheels
 * @param mark
 */
const Vehicle = function(color, wheels, mark) {
    this.color = color;
    this.wheels = wheels;
    this.mark = mark;

    /**
     * Fait démarrer la voiture
     */
    this.started = function () {
        console.log("La voiture à démarré");
    };

    /**
     * Fait arrêter la voiture
     */
    this.stopVehicle = function () {
        console.log("La voiture s'est arrêté");
    };
}



/**
 * Object to string convers
 * @returns {string}
 */
Vehicle.prototype.toString = function () {
    return this.mark + " " + this.color;
};

/**
 * Retourne la description du véhicule
 * @returns {string}
 */
Vehicle.prototype.getDescription = function () {
    const color = "Couleur: " + this.color;
    const wheels = "Nombre de roues: " + this.wheels;
    const mark = "Marque: " + this.mark;
    return color + ", " + wheels + ", " + mark;
};