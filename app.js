function findBiggestFraction(a, b) {
    var result;
    a > b  ?  result = ["firstFraction", a] : result = ["secondFraction", b];
    return result;
}

console.log(findBiggestFraction(7/2, 6/5));
console.log(findBiggestFraction(2/2, 8/5));
