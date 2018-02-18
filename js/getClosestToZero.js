function getClosestToZero() {

    var res = arguments[0];

    for (var i = 0; i < arguments.length; i++) {

        if (res > Math.abs(arguments[i])) {
            res = arguments[i];
        }
    }

    return res;
}