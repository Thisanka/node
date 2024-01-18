const G = 6.673e-11
const radisOfEarth = 6.38e6;
const massOfEarth = 5.98e24;
let height = 400000 

let g = G*massOfEarth/(radisOfEarth+height)**2;
console.log("g:"+""+g.toFixed(5));