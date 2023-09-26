function add(x, y)
{
    return x += y;
}
function subtract(x, y)
{
    return x -= y;
}
function multiply(x, y)
{
    return x *= y;
}
function divide(x, y)
{
    return x /= y;
}
function increment(n)
{
    return n+=1;
}
function decrement(n)
{
    return n-=1;
}
function makeInt(string)
{
    return parseInt(string,10);
}
function preserveDecimal(string)
{
    return parseFloat(string)
}
console.log(add(5,20))
console.log(subtract(150,25))
console.log(multiply(5,20))
console.log(divide(1500,20))
console.log(increment(5))
console.log(decrement(5))
console.log(makeInt("50000"))
console.log(preserveDecimal("500.36189040292"))