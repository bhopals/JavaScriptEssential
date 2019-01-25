

////FUNCTIONS

/*** NAMED /ANONYMOUS Function */

function findBiggestFraction(a, b) {
    var result;
    a > b  ?  result = ["firstFraction", a] : result = ["secondFraction", b];
    return result;
}
console.log(findBiggestFraction(7/2, 6/5));
console.log(findBiggestFraction(2/2, 8/5));

/*** ANONYMOUS Function **/
var theBiggest = function findBiggestFraction(a, b) {
    var result;
    a > b  ?  result = ["firstFraction", a] : result = ["secondFraction", b];
    return result;
}
console.log(theBiggest(1/2,1/3));


/*** Immediately Invoked Function Expression **/

//1
var a = 1/45, b = 4/8;
(function(){
    var result;
    a > b  ?  result = ["firstFraction", a] : result = ["secondFraction", b];
    console.log(result);
})(a, b);


//2
var result = (function(){
    var result;
    a > b  ?  result = ["firstFraction", a] : result = ["secondFraction", b];
    console.log(result);
})(8/9, 2/5);
console.log(result);


/**
 * 
 * -------------
 * Closures
 * -------------
 * 
 * A Closure is a function inside a function that relies on variables in the outside function to work.
 * 
 */
function giveMeEms(pixels) {

    var baseValue = 16;

    function doTheMath() {
        return pixels/baseValue;
    }
    return doTheMath;
}


var smallSize = giveMeEms(12);
var mediumSize = giveMeEms(15);
var largerSize = giveMeEms(20);
var xlargeSize = giveMeEms(25);

console.log(smallSize());
console.log(mediumSize());
console.log(largerSize());
console.log(xlargeSize());
