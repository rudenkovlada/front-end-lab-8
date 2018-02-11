var a = prompt("Enter EUR!");
var b = prompt("Enter USD!");

a = parseFloat(a);
b = parseFloat(b);

function convertUSD(usd){
    return usd*27;
}
function convertEUR(eur){
    return eur*35;
}

function eurToUSD() {
    var kurs = (1/25)/(1/35);
    return kurs;
}

console.log("" + a + " euros are equal " + convertEUR(a) + " UAH, " + b + " dollars are equal " + convertUSD(b) + " UAH, one euro is equal " + eurToUSD() +" dollars.");