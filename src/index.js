exports.max = function max(numbers = 0) {
    let result = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (result < numbers[i]) {
            result = numbers[i];
        }
    }
    if (numbers != 0) {
        return result;
    } else {
        return 0;
    }
}

exports.min = function min(numbers = 0) {
    let result = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (result > numbers[i]) {
            result = numbers[i]
        }
    }
    if (numbers != 0) {
        return result;
    } else {
        return 0;
    }
}

exports.avg = function avg(numbers = 0) {
    let result = 0;
    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }
    if (numbers != 0) {
        return result / numbers.length;
    } else {
        return 0;
    }
}