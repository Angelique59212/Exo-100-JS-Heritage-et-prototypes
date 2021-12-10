/**
 * Crèe un objet de type vélo
 * @param color
 * @param wheels
 * @param mark
 * @param rayonRoues
 * @param typePeinture
 */

const velo = function (color, wheels, mark, rayonRoues, typePeinture) {
    vehicle.call(this, color, wheels,mark);
    this.rayonRoues = rayonRoues;
    this.typePeinture = typePeinture;

    this.monter = function () {
        console.log("Je monte sur mon vélo");
    }

}
velo.prototype = Object.create(vehicle.prototype);
velo.constructor = Velo;