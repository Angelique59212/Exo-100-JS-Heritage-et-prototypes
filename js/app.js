const divDescriptionVehicule = document.getElementById("description-vehicule");
const divDescriptionVelo = document.getElementById("description-velo");
const divDescriptionVoiture = document.getElementById("description-voiture");

const titine = new Vehicle("red", 4, "Ferrari");
const bmc = new Bike("blue", 2, "bmc", 50, "epoxy");
const renault = new Car("black", 4, "renault", "Maaf", "Angélique");

divDescriptionVehicule.innerHTML = titine.toString();
divDescriptionVoiture.innerHTML = renault.toString();
divDescriptionVelo.innerHTML = bmc.toString();

console.log(bmc.getDescription());
console.log(renault.getDescription());


renault.started();
renault.stopVehicle();