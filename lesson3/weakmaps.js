let book1 = { title: 'Pride and Prejudice', author: 'Jane Austen' };
let book2 = { title: 'The Catcher in the Rye', author: 'J.D. Salinger' };
let book3 = { title: 'Gulliver’s Travels', author: 'Jonathan Swift' };

const library = new WeakMap();
library.set(book1, true);
library.set(book2, false);
library.set(book3, true);

console.log(library);

// Garbage Collection
book1 = null;
console.log(library);

