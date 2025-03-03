function sum()
{
    let total = 0;
    for(let value of arguments)
    {
        total += value;
    }
    
    console.log(arguments);
    return total;
}

console.log(sum(1, 2, 3));

function add(...args)
{
    let total = 0;
    return args.reduce((a, b) => a+b);
}
console.log(add(3, 2, 4,));

const fullName = 'Julian Mifsud';
const SplittedIntoArray = fullName.split(' ');
const firstName = SplittedIntoArray[0];
const lastName = SplittedIntoArray[1];

console.log(lastName + ' ' + firstName);

let nums = [2, 4, 5];
function avg(nums)
{
    if(typeof(nums) !== 'object')
    {
        throw new Error('Error occured');
    }
    let acc = 0;
    let total = 0;
    
    for(let i = 0; i < nums.length; i++)
    {
        acc++;
        total += nums[i];
    }
    return total/acc;
}
let Avg = 0;
let cheeky = true;
try
{
    Avg = avg(cheeky);  //Change cheeky to nums for code to work
}
catch(e)
{
    console.log('woops');
    //alert(e); This line can't be read through node, only html in browser
}

console.log(Avg);

function sayHi()    //Use 'window.SayHi' and 'window.SayHi()' in tab
{
    console.log('Hi');
}


function SumWithIn()
{
    let tots = 0;
    for(let value in arguments)
    {
        tots += value;
    }
    return tots;
}

function Sum(...items)
{
    if(items.length == 1 && Array.isArray(items[0]))
    {
        items = [...items[0]];
    }
    return items.reduce((a, b) => a+b);
}

console.log(SumWithIn(1, 2, 3, 4));
const arr = [1, 2];
console.log(Sum(arr));

const circle =
{
    radius: 2,
    get area()
    {
        return Math.PI * this.radius * this.radius;
    }
}
console.log(circle.area);

