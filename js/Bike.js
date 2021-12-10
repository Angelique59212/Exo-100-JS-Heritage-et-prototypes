/**
 * Crèe un objet de type vélo
 * @param color
 * @param wheels
 * @param mark
 * @param rayonRoues
 * @param typePeinture
 */

const Bike = function (color, wheels, mark, rayonRoues, typePeinture) {
    Vehicle.call(this, color, wheels,mark);
    this.rayonRoues = rayonRoues;
    this.typePeinture = typePeinture;

    /**
     * Monter sur le vélo
      */
    this.monter = function () {
        console.log("Je monte sur mon vélo");
    }

}
Bike.prototype = Object.create(Vehicle.prototype);
Bike.constructor = Bike;