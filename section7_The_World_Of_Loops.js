/*
GOALS FOR THIS SECTION

Write for loops 
write while loops
Avoid infinite loops
Iterate over arrays and objects

INTRO TO LOOPS 

Looping is about how we repeat code. 
There are multiple types of loops   for loop, while loop, for...of loop, for...in loop

*/

/*
FOR LOOPS 

There are three seperate pieces to a FOR loop. 
1.Initial value- The main idea is that we define a variable,
2. When to run the loop- We then add a counter which acts to control the duration of the loops
3. How to change value each iteration- What happens to the variable each time we go through the loop

for ([initiaExpression]; [condition]; [incrementExpression]
)


*/
//let is just a variable we have defined within the loop
//stop the loops at 10 
//add i each time 

for(let i = 1; i <= 10; i++){
    console.log("Hello") //Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
};

for(let i = 1; i <= 10; i+= 3){
    console.log(i) //1, 4, 7, 10 
};

for(let num = 1; num <= 5; num++) {
    console.log(`${num}x${num} = ${num * num}`); //1x1 = 1, 2x2 = 4, 3x3 = 9, 4x4 = 16, 5x5 = 25
};
//We can also loop in the other direction by counting backwards

for(let i = 200; i>= 0; i-=25) {
    console.log(i); //200, 175, 150, 125, 100, 75, 50, 25, 0 
}
/*
INFINITE LOOPS 


*/

/*
FOR LOOPS AND ARRAYS 


*/

/*
NESTED FOR LOOPS 


*/

/*
INTRO TO WHILE LOOPS 


*/

/*
MORE WHILE LOOPS 


*/

/*
BREAK KEYWORD


*/

/*
FOR..OF INTRO


*/

/*
COMPARING FOR AND FOR...OF 


*/

/*
FOR...OF WITH OBJECTS 

*/

/*
FOR...IN LOOPS 


*/


