function getTransformedArray(args, func) {
    var result = [];
    forEach(args, function (el) {
        result.push(func(el))
    });
    return result;
}