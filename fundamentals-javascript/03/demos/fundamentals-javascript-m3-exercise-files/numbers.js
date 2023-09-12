// Define number values
let num1 = 6;
let num2 = -100000;
let num3 = 1.32452;

//Defining big and small numbers
let num4 = 4560000000000000000000000000;
console.log(num4);
let num5 = -0.00000000000000000000000021;
console.log(num5);

//Creating numbers with e notation
let num6 = 1.2e+10;
console.log(num6);

console.log(`Minimum Value: ${Number.MIN_VALUE}`);
console.log(`Minimum Safe: ${Number.MIN_SAFE_INTEGER}`);
console.log(`Max: ${Number.MAX_VALUE}`);
console.log(`Maximum safe integer: ${Number.MAX_SAFE_INTEGER}`);

// Creating BigInt's
let bigInt1 = 1n;
let bigInt2 = 1_560_000_000_000_000_000_000n;
console.log(bigInt2);
