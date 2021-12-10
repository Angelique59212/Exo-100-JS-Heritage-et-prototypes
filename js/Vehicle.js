let vehicle = function(color, wheels, mark) {
    this.color = color;
    this.wheels = wheels;
    this.mark = mark;

    this.started = function () {
        console.log("La voiture à démarré");
    };
    this.stopVehicle = function () {
        console.log("La voiture s'est arrêté");
    };
}