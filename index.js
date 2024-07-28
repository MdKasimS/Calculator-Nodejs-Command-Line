let process = require('process');

const {add, sub, mul, div} = require('./Arithmatic/BasicOperations');

const num1 = parseInt(process.argv[2]);
const operation = process.argv[3].toUpperCase();
const num2 = parseInt(process.argv[4]);

console.log(num1, operation, num2);


switch(operation)
{
    case 'ADD':
        console.log(add(num1, num2));
        break;

    case 'SUB':
        console.log(sub(num1, num2));
        break;

    case 'MUL':
        console.log(mul(num1, num2));
        break;

    case 'DIV':
        console.log(div(num1, num2));
        break;
    
    default:
        console.log("Something went wrong...");
}