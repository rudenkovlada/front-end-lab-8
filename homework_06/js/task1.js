var a = prompt("Enter a!");
var b = prompt("Enter b!");
var c = prompt("Enter c!");

a = parseFloat(a);
b = parseFloat(b);
c = parseFloat(c);

//alert(a+b+c);

if (isCorrect(a,b,c)){
    var type = findType(a,b,c);
    var square = findSquare(a,b,c);
    console.log("Type of triangle is " + type +  "triangle and square is " + square);
}
else
    console.log("Incorrect data");

function isCorrect(a,b,c) {
    if(a>0 && b>0 && c>0)
        return true;
    else
        return false;
}
function findSquare(a,b,c) {
    var perimeter = (a + b + c)/2;
    var area =  Math.sqrt(perimeter*((perimeter-a)*(perimeter-b)*(perimeter-c)));
    return area;

}
function findType(a, b, c){
    var result = ' ';

    //check
    if (a===b && a===c){
        result = result + "equilateral ";
    }
    else if(a===b || a===c || b===c){
        result = result + "isosceles ";
    }
    else {
        result = result + "scalene ";
    }

    //check if right
    if ((a*a===b*b + c*c) || (b*b===a*a + c*c) || (c*c===b*b + a*a)){
        result =+ "right ";
    }

    return result;
}