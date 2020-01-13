/*
FUNCTIONS IN DETAILS 

Important things we should know about functions! 

GOALS 
1. Understand Scope 
2. Write higher order functions.
3. Pass functions as callbacks. 
*/

/*
FUNCTION SCOPE 

Function scope can be seen as variable visibility. 
The location where a variable is defined dictates where we have access to that variable. 
There are multiple different ways in which functions works in javascript. 

The first type of scope is called function scope. 
When we define a variable in a function, it is accessable only within that function. 

*/
function lol() {
    let person = "Tom"; 
    const age = 45; 
    var color = "teal"; 
console.log(person) //Tom
console.log(age) //45 
console.log(color) //teal 
}

lol() //calling the function however we don't have access to the variables inside this function. 
//WE CANNOT ACCESS THIS VARIABLE OUTSIDE THE BOUNDS OF OUR FUNCTION. 
//console.log(person)//not defined 
//console.log(age)//not defined
//console.log(color)//not defined 

let bird = "duck"; 
console.log(bird)//duck 
function birdWatching(){
    let bird = "chicken"
    console.log(bird)//chicken 
}
birdWatching()
console.log(bird);//duck 



/*
BLOCK SCOPE 



*/


/*
LEXICAL SCOPE  



*/

/*
FUNCTION EXPRESSIONS 



*/


/*
HIGHER ORDER FUNCTIONS



*/


/*
FUNCTIONS AS ARGUMENTS 



*/


/*
FUNCTIONS AS RETURN VALUES  



*/


/*
CALLBACKS 



*/


/*
HOISTING 



*/


/*




*/