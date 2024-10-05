//Object
const person: {name: string, age: number} = { name: 'Max', age: 30 }

console.log(person.name);

//array

let favActivities: string[];
favActivities = ['Sports','Cooking'];


// array of strings
const insaan: {name: string, age: number, hobbies:string[]} = { name: 'Max', age: 30 , hobbies: ['Sports','Cooking','Reading']}

for(const hobby of insaan.hobbies){
    console.log(hobby.toUpperCase());
}