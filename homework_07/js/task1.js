var a = prompt("Enter natural number N (0<N<=20)!");
var float = parseFloat(a);
var height = parseInt(a);



if (isNaN(a) || a > 20 || a < 1 || (float!==height)){
    console.error('Incorrect!');
}
else{
    var emptyBlock = "   ";
    var fullBlock = "[~]";

}


var width = height * 2 - 1;
var middle = Math.round(width / 2);

var xBegin = middle;
var xEnd = middle;

var result = "";


for (y=1; y<=height; y++){
    var row = '';
    for (x=1; x<=width; x++){
        if((x>=xBegin) && (x<=xEnd)){
            row = row + fullBlock;
        }
        else {
            row = row + emptyBlock;
        }
    }
    result = result + row + "\n";
    xBegin--;
    xEnd++;
}

console.log(result);




