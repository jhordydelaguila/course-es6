const games = new Set(['Super Mario Bros.', 'Banjo-Kazooie', 'Mario Kart', 'Super Mario Bros.']);

games.add('Banjo-Tooie');
games.add('Age of Empires');
games.delete('Super Mario Bros.');

console.log(games);

//  if you want to delete all the items from a Set,

games.clear()
console.log(games);

// add() returns the Set if an item is successfully added
// delete() returns boolean true or false

