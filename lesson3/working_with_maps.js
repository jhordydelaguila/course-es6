
// you can use the .has() method to check if a key-value pair exists in your Map by passing it a key
const members = new Map();

members.set('Evelyn', 75.68);
members.set('Liam', 20.16);
members.set('Sophia', 0);
members.set('Marcus', 10.25);

console.log(members.has('Xavier'));
console.log(members.has('Marcus'));

// you can also retrieve values from a map
console.log(members.get('Evelyn'));

/*
Looping Through Maps
*/

// 1-Using the MapIterator
let iteratorObjForKeys = members.keys();
console.log(iteratorObjForKeys.next());
console.log(iteratorObjForKeys.next());

// use the .values() method to access the Pap's values 
let iteratorObjForValues = members.values();
console.log(iteratorObjForValues.next());

// 2-Using a for...of loop
console.log("");
for (const member of members) {
    console.log(member);
}

// 3-Using a forEach loop
console.log("");
members.forEach((value, key) => console.log(key, value));
