/**/

var quit = false;

while (!quit){
    if(confirm("Do you want to play a game?")){
        var result = playGame(1);
        console.log("Thank you for a game. Your prize is: " + result);
    }
    else {
        console.log("You did not become a millionaire");
        quit = true
    }
}



function playGame(lev, total) {
    var totalPrize;
    if (total === undefined){
        totalPrize = 0;
    }
    else {
        totalPrize = total;
    }



    var max = 5 * lev + 1;
    console.log("total " + totalPrize);
    var winningNumber = Math.floor(Math.random() * max);
    console.log("win " + winningNumber);


    var attemts = 3;

    var level = lev;
    var possiblePrize;

    while (attemts>0){
        possiblePrize = countPossiblePrize(attemts);
        var number = prompt("Enter a number from 0 to " + (max-1) + " \n" +
            "Attempts left: " + attemts + "\n" +
            "Total prize: " + totalPrize + "$" + "\n" +
            "Possible prize on current attempt:" + possiblePrize + "$");
        if (parseInt(number) === winningNumber){
            totalPrize =+ possiblePrize;
            if(confirm("Total prize: "  + totalPrize + "$" +  "\n" + "Do you want to continue a game?")){
                totalPrize = playGame(level+1, totalPrize);
            }
            return totalPrize;
        }
        else {
            attemts--;
        }

    }

function countPossiblePrize(attemts) {
    var result;
    switch (attemts) {
        case 3:
            result = 10;
            break;
        case 2:
            result = 5;
            break;
        case 1:
            result = 2;
    }
    if(level>1){
        result = result * 3^(level+1);
    }
    return result;
}





}