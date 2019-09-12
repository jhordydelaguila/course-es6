const months = new Set(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']);

// Checking The Length
console.log(months.size);

// Checking If An Item Exists
console.log(months.has('September'));

// Retrieving All Values
console.log(months.values());

/*
Using the SetIterator
*/

const iterator = months.values();
console.log(iterator.next());
console.log(iterator.next());

/*
Using a for...of loop
*/

const colors = new Set(['red', 'orange', 'yellow', 'green', 'blue', 'violet', 'brown', 'black']);
for (const color of colors) {
  console.log(color);
}

