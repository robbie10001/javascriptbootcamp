/*
INTRO TO OBJECTS 

Arrays are really useful when we have ordered information. 
However, how would we store data when have different data for an individual person? 
We could use an array, but it might be better to do it another way.
A better way to do this would be through the use of an object! 
An OBJECT allows us to store data where we can group piece of data together. 
But rather than just sorting data by an index like an array, 
We can specify labels. 

Objects are collections of properties. 
We have seen properties before. For example, when we have a string .length is a property! 
Properties are a key-value pair. Objects are everywhere in Javascript
Properties are pairs of information! 
Rather than accessing data using an index, we use custom keys. 
With objects its not all about order necessarily, its about sorting pairs of information.
With objects we access the information using the key-value pair unlike arrays which use indexs. 
In other programming langauges, Objects are called Dictionaries. This is a good way to thing about what objects do. 
*/
const fitbitData = [
    308756,
    1814,
    211
]
//if we look at this, it is not clear at all what we are looking at. 

const lucyFitbitDay = [
    1233,
    1232,
    211
]
//arrays are great but in this situation are not particularly useful. 
//an example of an object 

const fitBitInformation = {
    totalSteps : 308727,
    totalMiles : 211.7,
    avgCalorieBurn : 5755, 
    workoutsThisWeek : "5 of 7",
    avgGoodSleep : "2:13"
};

//example of Key Value Pairs 

const objective = {
    //username = key, 
    //"crazyCatLady" = value 
    username: "crazyCatLady", 
    //upvotes = key
    //7 = value 
    upvotes: 7,
    //text = key
    //"great post" = value 
    text: "great post!"
};

/*
CREATING OBJECT LIERALS 

To signify an object we use curly braces. 
Just like with arrays, when we store an object into a variable, its a reference to that object. 
Just like with arrays, pepole use const all the time when creating objects.
We can store many different datatypes into objects. Be it strings, numbers, booleans, arrays or even other objects. 
When we create an object our keys are automatically converted into strings. Except for symbols
If we define a object with a single property we don't need a comma (althugh we can add a comma)
However, if we have multiple properties in our object, we need a comma.
*/

const fitBitData = {
    //name we want to store it under followed by a colon.
    //then the value. We need to make sure to end in a comma after every key-value pair.
    totalSteps: 308727,
    totalMiles: 211.7,
    avgCalorieBurn: 5755,
    workoutsThisWeek: "5 of 7",
    avgCalorieBurn: "2:13"
};
console.log(fitBitData)//{ totalSteps: 308727, totalMiles: 211.7, avgCalorieBurn: '2:13',workoutsThisWeek: '5 of 7' }
//to access information within an object we can use the dot syntax. For example, 
//.length 
console.log(fitBitData.totalMiles) //211.7
console.log(fitBitData.avgCalorieBurn) //2:13

/*
ACCESSING OBJECT PROPERTIES 

WE can attempt to use different datatypes as a key, but it will be turned into a string.

*/
const numbers = {
    100 : "one hundred",
    16: "sixteen",
};
//console.log(numbers.100)//SyntaxError: missing ) after argument list
//USING THE ABOVE METHOD WILL NOT WORK. However, we have another way of accessing data within our objects.
//WE use array brackets followed by the key inside the brackets. 
console.log(numbers[100]) //one hundred
//This works because [100] is also converted to a string and is used to see if there is a matching string within the object which it does. 
//the reason we would use square bracket notation is that we have property names that aren't valid Java Script identifiers. 
//Identifiers in javascript are the name of a vairable. For example,
//let my cat = "mish"
//this is not a valid identifier in javascript. It would be a syntax error.
//let 76copeland = "address" 
//this would also be invalid because we can't start a variable with a number. 
//However, that doesn't mean that we can use that as a key in an object! 
//we could then use square bracket notation in this way to accesss it, 
//numbers["76copeland"] //address
//we would use bracket notation when it is not synatically valid to use dot notation. 

//another reason to use square brackets is when we want to use a dynamic value, like a variable to access information from an object, for example.
const palette = {
    red: "#eb4d4b",
    yellow: "#f9ca24",
    blue: "#30336b"
}
console.log(palette.blue); //#30336b
console.log(palette["blue"]); //#30336b
//let says this is comming from some user input. 
//it comes from a website where a user is choosing some colour.
let mysteryColor = "yellow"; 
console.log(palette[mysteryColor]); //#f9ca24
//this method would not work with dot notation.
//this is because the square brackets looks for the value of mystery colour (yellow), and then plug that into palette. 
//square brackets are useful when we have dynamic information that we are trying to access!  

/*
ADDING AND UPDATING PROPERTIES 

We can do this using either dot notation or square brackets. 
The only difference is that we use the equals sign to assign a value, eiher to update that value or give it an inital value.

*/
const userReviews = {};

userReviews["queenBee49"] = 4.0; 
userReviews.mrSmith79 = 3.5; 
console.log(userReviews); //{ queenBee49: 4, mrSmith79: 3.5 }
//To add a property, we access a property that doesn't exist, and pass to it a value. 
//to update something we do exactly the same thing.
userReviews["Colt"] = 5; 
userReviews.Bruce = 1; 
console.log(userReviews);//{ queenBee49: 4, mrSmith79: 3.5, Colt: 5, Bruce: 1 }
//we also have access to operations we have seen before. For example += 
userReviews["queenBee49"] += 2; //queenBee49: 6
userReviews.mrSmith79++;  //mrSmith79: 4.5
console.log(userReviews)


/*
NESTED ARRAYS AND OBJECTS 

*/

/*
OBJECTS AND REFERENCE TYPES 

*/

/*
ARRAY/OBJECT EQUALITY

*/

