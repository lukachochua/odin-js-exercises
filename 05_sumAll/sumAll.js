const sumAll = function (min, max) {

    let result = 0;

    if (min < 0 || max < 0 || typeof (min) != 'number' || typeof (max) != 'number') {
        return "ERROR";
    }

    if (min > max) {
        [min, max] = [max, min];
    }


    for (let i = 0; i < max; i++) {
        result += min;
        min++;
    }

    return result;
}

// Do not edit below this line
module.exports = sumAll;
