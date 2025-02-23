console.log('HI');
// var let const
let name = 'j';
console.log(name);

let obj = ['blue', 3];
obj[0] = 4;
obj[1] = 'red';
console.log(obj);
console.log('Test Commit');

let currentScore = 101;
let highScore = 100;
highScore = currentScore > highScore ? currentScore : highScore;
console.log(highScore);

const output = fizzBuzz('dsa');
console.log(output);

function fizzBuzz(input){
    if((input % 3 == 0) && (input % 5 == 0))
    {
        return 'FizzBuzz';
    }
    if(input % 5 == 0)
    {
        return 'Buzz';
    }
    if(input % 3 == 0)
    {
        return 'Fizz';
    }
    if(typeof(input) !== 'number')
    {
        return 'Not a number';
    }
}

const array = [0, 1, '', 3, undefined, 4];
console.log(countTruths(array));

function countTruths(array)
{
    let counter = 0;
    for(let i = 0; i < array.length; i++)
    {
        if(array[i])
        {
            counter++;
        }
    }
    return counter;
}