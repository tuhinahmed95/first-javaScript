// callback and higher order function

function square(x){ 
    console.log('square of ${x}: ${x * x}');
}
square(5);

// const y = square;
// y(5);

function higherOrder(num,callback){ 
    callback(num);

}
higherOrder(6,square);
