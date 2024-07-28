function add(a,b)
{
    return a + b;
}

function sub(a,b)
{
    return a - b;
}

function mul(a,b)
{
    return a * b;
}

function div(a,b)
{
    if(b===0)
    {
        throw new SyntaxError("Divisible By Zero Not Possible");
    }
    return a/b;
}

// module.export = {
//     add : add,
//     sub : sub,
//     mul: mul,
//     div : div
// };

module.exports = {
    add,
    sub,
    mul,
    div
};