// Playing with Objects
// Objectives

// Practice iterating through an array of objects / dictionaries.
// Imagine that you are given an array of objects.For example,

var users = [
    {
        name: "Michael",
        age: 37
    },
    {
        name: "John",
        age: 30
    },
    {
        name: "David",
        age: 27
    }
];
//How would you print / log John's age?
//How would you print / log the name of the first object ?


console.log(users[1].name, "Age: " + users[1].age);
console.log(users[0].name, "Age: " + users[0].age);

//How would you print / log the name and age of each user using a for loop ? Your output should look something like this
for (var i = 0; i < users.length; i++) {
    console.log(users[i].name, "Age: " + users[i].age);
}