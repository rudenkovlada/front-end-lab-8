function getFilteredArray(args, func) {
    var result = [];

    forEach(args, function (el) {
        if (func(el))
            result.push(el);
    });

    return result;

}