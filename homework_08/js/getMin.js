function getMin() {

    var res = arguments[0];

    for (var i = 0; i < arguments.length; i++) {
        if (res > arguments[i]) {
            res = arguments[i];
        }
    }

    return res;
}