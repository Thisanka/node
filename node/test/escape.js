const g = 6.673e-11;
const mass = 1.898e27;
const radius = 7149000;

let velosity = Math.sqrt (2*g*mass/radius);
console.log(velosity.toFixed(3));