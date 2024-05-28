
let user = prompt("Ingrese su nombre de usuario: ");
let edad = parseInt(prompt("Ingrese su edad: "));
let dni = prompt("Ingrese su DNI: ");
let montoPrestamo = parseInt(prompt("Ingrese el monto del préstamo que desea solicitar: "));
const cantidadCuotas = parseInt(prompt("Ingrese la cantidad de cuotas a pagar: "));
const tasaInteres = 10;

if (edad >= 18 && montoPrestamo >= 50000) {
    let totalInteres = 0; 
    for (let i = 1; i <= cantidadCuotas; i++) {
        let cuotaSinInteres = montoPrestamo / cantidadCuotas;
        let interesCuota = (montoPrestamo * tasaInteres / 100); 
        let cuotaConInteres = cuotaSinInteres + interesCuota;
        totalInteres += interesCuota; 
        console.log(`En la cuota ${i} usted habrá pagado ${cuotaConInteres}`);
    }
    console.log(`En total usted habrá pagado ${montoPrestamo + totalInteres}`); l
} else {
    console.log(`Usuario ${user} (dni: ${dni}) usted no puede acceder al préstamo`);
}