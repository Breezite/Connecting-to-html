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
    alert(e);
}

console.log(Avg);

function sayHi()    //Use 'window.SayHi' and 'window.SayHi()' in tab
{
    console.log('Hi');
}