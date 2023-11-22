
function meterToFeet(meter) {
    return 3.279 * meter;
}
function feetToMeter(feet) {
    return 0.305 * feet;
}
let feet =+prompt("enter foot:");
document.write(`${feet} foot = ${feetToMeter(feet)} meter <br>`);
let meter = +prompt("enter meter:");
document.write(`${meter} meter = ${meterToFeet(meter)} foot`);