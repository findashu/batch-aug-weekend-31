

// empty_obj

var empty_obj = {};

console.log(typeof empty_obj);
console.log(empty_obj);


var js = {
    name:'Javascript',
    gender: 'Female',
    age: 20
}

var reslt = {
    math: 40,
    physics: 60,
    "basic computer" : 70,
    "": 45
}
console.log(js);
console.log(reslt);

var person = {
    name: 'Abhinav sharma',
    gender: 'Male',
    age: 23,

    hobbies: ['singing', 'coding', 'cricket'],

    highestEducation: {
        degree:'BE',
        stream:'Electrical',
        passedYear: 2017,
        percentage: 75
    },

    friends: [
        {
            name:'ashutosh',
            gender: 'male'
        },
        {
            name:'josh',
            gender: 'male'
        }
    ]
}

console.log(person);

// dot notation and bracket notation
console.log('Math result', reslt.math)

console.log('Name ', person.name);


console.log('Hobbies ', person.hobbies[1]);

console.log('friend ', person.friends[1].gender);


// update property

person.name = 'abhinav';


console.log(person.name)


// add a new property

person.married = false;

console.log(person);

// delete a property

delete person.age;


console.log(person);


// bracket notation

console.log(reslt["basic computer"]);


var userInput = 'name';

console.log(person[userInput]);

console.log(person['friends'][1]['gender']);





























