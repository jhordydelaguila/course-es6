
// The Yield Keyword
function* getEmployee() {
    console.log('the function has started');

    const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];

    for (const name of names) {
        console.log(name);
        yield;
    }

    console.log('the function has ended');
}
const generatorIterator = getEmployee();
generatorIterator.next();
generatorIterator.next();

console.log('\n');
console.log('===');
console.log('\n');

// Yielding Data to the "Outside" World
function* getEmployee2() {
    console.log('the function has started');

    const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];

    for (const name of names) {
        yield name;
    }

    console.log('the function has ended');
}

const generatorIterator2 = getEmployee2();
let result = generatorIterator2.next();
console.log(result.value); // is "Amanda"

console.log(generatorIterator2.next().value) // is "Diego"
console.log(generatorIterator2.next().value) // is "Farrin"
