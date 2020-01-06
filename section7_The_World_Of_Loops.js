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

Infinite loops are something that we want to avoid. 
In general we need to make sure that we are going in the right direction with our loop. For example,
for(let i 100; i >= 0; i--) {
    console.log(i)
}
*/
//this would be an infinite loops, because i will always be bigger than zero. 
/*
for (let i = 20; i >= 0; i+=2) {
    console.log(i);
}
*/

/*
FOR LOOPS AND ARRAYS 

We can use for loops to iterate of an array or a string.
To loop over an array, start at 0 index and continue to the last index (length -1)
  
*/
const animals = [ "lions", "tigers", "bears"];
for (let i = 0; i < animals.length; i ++) {
    console.log(i, animals[i]); //0 "lions" 1 "tigers" 2 "bears"
}

const examScores = [98, 77, 84, 91, 57, 66]; 
for (let i = 0; i < examScores.length; i ++) {
    console.log(examScores[i]) //98, 77, 84, 91, 57, 66 
}

const myStudents = [
    {
        firstName: "Zeus",
        grade: 86
    },
    {
        firstName: "Artemis",
        grade: 97
    },
    {
        firstName: "Hera",
        grade: 72
    },
    {
        firstName: "Appolo",
        grade: 90
    }
];

for(let i = 0; i < myStudents.length; i ++) {
    let student = myStudents[i]; 
    console.log(`${student.firstName} scored ${student.grade}`); //Zeus scored 86, Artemis scored 97, Hera scored 72, Appolo scored 90
};   
const word = "stressed";
for(let i = word.length - 1; i >= 0; i --) {
    console.log(word[i]); //desserts
};

const greekGods = [
    {
        firstName: "Zeus",
        grade: 86
    },
    {
        firstName: "Artemis",
        grade: 97
    },
    {
        firstName: "Hera",
        grade: 72
    },
    {
        firstName: "Appolo",
        grade: 90
    }
];

let total = 0;

for(let i = 0; i < greekGods.length; i++ ) {
    let allStudent = greekGods[i];
    total += allStudent.grade;
}
console.log(total/myStudents.length); //86.25 







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
