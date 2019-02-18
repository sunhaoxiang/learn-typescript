function sum(x, y) {
    return x + y;
}
var mySum = function (x, y) {
    return x + y;
};
var mySearch = function (source, subString) {
    return source.search(subString) !== -1;
};
function buildName(firstName, lastName) {
    if (lastName) {
        return firstName + ' ' + lastName;
    }
    else {
        return firstName;
    }
}
function buildName2(firstName, lastName) {
    if (firstName === void 0) { firstName = 'Tom'; }
    if (lastName === void 0) { lastName = 'Cat'; }
    return firstName + ' ' + lastName;
}
function push(array) {
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
    items.forEach(function (item) {
        array.push(item);
    });
}
function reverse(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
