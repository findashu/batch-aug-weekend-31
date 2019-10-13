let obj = {
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

// let gender = obj.gender;
// let hobbies = obj.hobbies;

// object destructuring
let {gender, hobbies, age:myage} = obj;

console.log(gender);
console.log(hobbies);

console.log(myage);


// Math,Physics,English, History
let results = [45,50,64,80];

// let english = results[2];
// let math = results[0];


let [math,,english] = results;

console.log(english);
console.log(math);