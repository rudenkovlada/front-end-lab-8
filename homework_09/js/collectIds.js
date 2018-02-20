function collectIds(movies) {

    var result = [];

    getFilteredArray(movies, function (el) {
        if (el.rating > 3.0) {
            result.push(el);
        }
    });

    result = getTransformedArray(result, function (el) {
        return el.id;
    });

    return result;

}
