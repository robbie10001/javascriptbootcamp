/*
GOALS FOR THIS SECTION
Write Valid Functions
Write functions with arguments 
compare function expressions and function statements 
write a bunch of functions! 
*/

/*
OUR FIRST FUNCTION 

Functions are really important in order to be a Javascript developer. 
Functions are very important to JavaScripts identity as a language. 
There are lots of things we can do with functions that are really cool. 
Writing functions are not difficult, but there are lots of things to understand about the features of functions.

Functions are resuable procedures. It's a bunch of code that we wrap up in a function.
It a bunch of lines of code that we can call again at any point. We can refer back to it. 
We could have a function called getlatestredditpost, and everytime we called the function would request new reddit post and send them back to us. 
Or we could have a function that gives us the average value from within an array.
Functions allow us to wrtie resuable, modular code. 
We define a chunk of code that we can then excute at a later point.
We us them ALL THE TIME!

There is a two step process for every functin that we ever write.
1. DEFINE - we tell JavaScript this is how it works 
2. RUN- We execute the function and run it! 

We have used Methods before, and methods are functions! 
 
For example, 

"hello".toUpperCase(); 
Is a build in function, it's already defined for us and we just use it! 

Defining a function 

function functionName () {
    do something
};
*/
//all this function does is print out the three console logs below. 
//every time we call call a function these statements will be printed out. 
function grumpus() {
    console.log("You again");
    console.log("for the last time!");
    console.log('leave me alone!');
}
//in order to run the function, we have to call the function. 
grumpus();//you again, for the last time, leave me alone! 
//in order to run the code we need () parenthesis 
//we can loop through our functions 

for (let i = 0; i >3; i++) {
    console.log(grumpus());
}
/*
DICE ROLL FUNCTION
*/
function rollDie() {
    let roll = Math.floor(Math.random() * 6) + 1;
    console.log(`Rolled ${roll}`);
};

rollDie();//Rolled 1

function throwedDice(){
    console.log(rollDie());
    console.log(rollDie());
    console.log(rollDie());
    console.log(rollDie());
    console.log(rollDie());
    console.log(rollDie());
}

throwedDice(); //rolled 3, rolled 5, rolled 6, rolled 1, rolled 4, rolled 1

/*
INTRODUCING ARGUMENTS

Arguments is just a fancy term for inputs into a function.
So far, our simple functions haven't accepted any inputs. 
They behave the same way every time. 

We can write functions that accept inputs, or in other words, accept functions! 
We can put through as many arguments as we want into functions. 
An example of an argument we have already used. 

"hello".indexOf("h"); //returns 0 for the index of the argument "h"
"hello".indexOf("0"); //returns 4 for the index of the argument "o"

*/

//in the below function, the argument of person will do nothing along. 
//it will only work if we pass a value (datatype) when we call greet. 
function greet(person){
    console.log(`Hey ${person}`);
    //our input has a direct impact on what our function does. 
}
greet("bruce"); //Hey bruce
greet("Harry"); //Hey Harry
//if we don't pass anything in, we don't break the code, we just get undefined! 

function throwThemDice(numRolls) {
    for(let i = 0; i < numRolls; i++) {
        rollDie();
    }

}

throwThemDice(5)//Rolled 1, Rolled 4, Rolled 2, Rolled 2, Rolled 3 

/*
FUNCTIONS WITH MULTIPLE ARGUMENTS



*/

//the num that we have in our function definition is a paramater. 
//A paramater is a placeholder name. It's the variable that we define when we write our function.
//When we call our function we pass in a value this is the argument

              //num=paramater
function square(num) {
    console.log(num * num);
}
square(4)//16
     //4= argument

function sum(x, y){
    console.log(x + y);
}
sum(3, 4) //7
sum(2, 5) //7
//the order we define our paramaters in, dictates how it is filled in from left to right
//(1 first, 4 second)
//(10 first, 3 second)
function divide(a,b){
    console.log(a/b);
}

divide(1, 4) //0.25
divide(10, 3) //3.3333
//divide(5)//Nan
//The function doesn't care about what datatype we put in. It will just do what we tell it to!
//if we are missing an argument, we will return undefined! 
/*
THE RETURN STATEMENT

the build in method of javascript return values when we call them. We can then store those values. 
So far, our functions are not returning a value. They are printing a value out! 

if we look at any build in method, for example 

"hello".toUpperCase();

the console prints out hello, and we see the text hello, but that's only in the console. 
If we run this code in Visual Code Studio, we see nothing, nothing is returned to us.
We are not printing it nor are we saving it to a variable. for example,

const scream = "hello".toUpperCase();
toUpperCase returned a value which we then save to our variable "scream"
return values are very useful, we can capture them in a variable, we could pass them to another function.
Most of the time we really dom't print much to the console! 
Unless we are testing something out. 

Most of the time when we are writing function is returning values and using those values somehow. 


*/
console.log("---------break----------");

function add(x, y) {
    console.log(x + y);
}
const sums = add(1,2)
console.log(sums)//undefined 

function add(x, y) {
    return x + y; //THIS RETURNS A VALUE WE CAN USE!
}
const summer = add(2, 2)//4
console.log(summer)//4

//we can only return one thing from a function.
//we can only return one value. To get multiple values we can use strings and arrays to collect the values we want to return



/*

MORE ON RETURN VALUES 



*/



/*
FUNCTION CHALLENGE 1: PASSWORDVALIDATOR



*/



/*
FUNCTION CHALLENGE2: AVERAGE



*/



/*
FUNCTION CHALLENGE 3: PANGRAMS



*/



/*
FUNCTION CHALLENGE 4: GET PLAYING CARDS



*/
