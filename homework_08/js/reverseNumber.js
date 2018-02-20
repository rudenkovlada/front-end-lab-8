function reverseNumber(a) {
    var stringedNumber = a.toString();
    var result = '';

    if (stringedNumber[0] === '-') {
        result = '-';
    }
    for (var i = stringedNumber.length - 1; i >= 0; i--) {
        result = result + stringedNumber[i];
    }
    result = parseFloat(result);
    return result;
}