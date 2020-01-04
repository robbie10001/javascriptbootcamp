//alert("its working!");

/*
GOALS OF THIS SECTION 

understanding comparison operators
write conditional statements.
work with boolean operators.

*/ 
/*
COMPARISON OPERATORS.

> greater than
> less than
>= greater than or equal to 
<= less than or equal to 
== equality 
!= not equal
=== strict equality 
!== stict non-equality 
*/ 
/*
DOUBLE EQUALS == 

== (equality operator)

the equality operator checks for equality of value, but not equality of type.
It coerces both values to the same type and then compares them. 
This can lead to some unexpected results!
*/ 
/*
TRIPLE EQUALS ===

=== (strict equality operator)

Checks for EQUALITY of VALUE AND TYPE! 
It is more precise and specific than the equality operator.
FOR THE VAST MAJORITY OF TIME, WE SHOULD USE TRIPLE EQUALS! 

*/ 
/*
NON EQUALITY (!=) AND NON-STRICT EQUALITY (!==)

For the same reason we use the strict equality operator,
we should use the strict non-equality operator (!==)

*/ 
/*
CONDITIONAL STATEMENTS 

IF STATEMENTS

IF - Runs code if a given condition is true 
*/
//example 1 
if (1 === 1){
    console.log("It's True");
};

//This if statement would be evaluated to true. 

let rating = 3; 
//example 2 
if(rating === 3) {
    console.log("You are a superstar!");
}
//example 3 
if(rating < 3) {
    console.log("You are not a superstar!");
}
// example 4 
let num = 37; 
if(num % 2 !== 0){
    console.log("ODD NUMBER!");
}

/*
ELSE IF STATEMENTS AND ELSE STATEMENTS 

If not the first thing, maybe this other thing? 

*/

//example 1 

//Peformance Review 
//3 - superstar
//2 - meets expectations
//1 - needs improvement 
// - anything else wtf? 

let employerRating = 2; 

if(employerRating === 3){
    console.log("You are a superstar!");
}
else if(employerRating === 2) {
    console.log("meets expectations")
}
else if (employerRating === 1) {
    console.log("Needs improvement!")
}
else {
    console.log("Not a valid rating!")
};

//While if and else both require a condition to be put within parentheses(), with an else statement this is not the case. 

//EXAMPLE 2 

let highScore = 1430; 
let userScore = 1200; 

if(userScore > highScore) {
    console.log(`Congrads, you have the new high score of ${userScore}`);
    highScore = userScore;
}
else {
    console.log(`Good Game, your score of ${userScore} did not beat the high score of ${highScore}`)
}