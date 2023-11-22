
function meterToFeet(meter) {
    let feet;
        feet= 3.279 * meter;
    return feet;
}
    function feetToMeter(feet) {
    let meter;
        meter = 0.305 * feet;
    return meter;
}
    let feet =
        +prompt("enter foot:");
    document.write(`${feet} foot = ${feetToMeter(feet)} meter`);
    document.write ("<br>")
    let meter = +prompt("enter meter:");
    document.write(`${meter} meter = ${meterToFeet(meter)} foot`);