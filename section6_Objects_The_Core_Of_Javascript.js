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

*/

/*
ACCESSING OBJECT PROPERTIES 

*/

/*
ADDING AND UPDATING PROPERTIES 

*/

/*
NESTED ARRAYS AND OBJECTS 

*/

/*
OBJECTS AND REFERENCE TYPES 

*/

/*
ARRAY/OBJECT EQUALITY

*/

