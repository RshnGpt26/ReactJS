function add(a, b) {
    let add = a + b;
    return add;
}

function sub(a, b) {
    let sub = a - b;
    return sub;
}

function div(a, b) {
    let div = a / b;
    return div.toFixed(2);
}

function mult(a, b) {
    let mult = a * b;
    return mult;
}

export { add, sub, div, mult };