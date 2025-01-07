//Object
var person = { name: 'Max', age: 30 };
console.log(person.name);
//array
var favActivities;
favActivities = ['Sports', 'Cooking'];
// array of strings
var insaan = { name: 'Max', age: 30, hobbies: ['Sports', 'Cooking', 'Reading'] };
for (var _i = 0, _a = insaan.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
