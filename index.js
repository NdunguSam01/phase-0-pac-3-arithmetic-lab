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
console.log(increment(5))
console.log(decrement(5))
console.log(makeInt("50000"))
console.log(preserveDecimal("500.36189040292"))