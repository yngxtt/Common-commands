function judgeWho(animal) {
    if (animal.anjiao) {
        animal.skill();
    }
    else {
        animal.say();
    }
}
function judgeWho2(animal) {
    if ('skill' in animal) {
        animal.skill();
    }
    else {
        animal.say();
    }
}
function add(first, second) {
    if (typeof first === 'string' || typeof second === 'string') {
        return "".concat(first).concat(second);
    }
    else {
        return first + second;
    }
}
var numberObj = /** @class */ (function () {
    function numberObj() {
    }
    return numberObj;
}());
function addObj(first, second) {
    if (first instanceof numberObj && second instanceof numberObj) {
        return first.count + second.count;
    }
}
var val = addObj({ a: 1 }, { b: 1 });
console.log(val);
