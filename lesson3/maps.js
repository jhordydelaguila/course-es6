
// How to Create a Map
const employees = new Map();
console.log(employees);

// Modifying Maps
employees.set('james.parkes@udacity.com', {
    firstName: 'James',
    lastName: 'Parkes',
    role: 'Content Developer'
});
employees.set('julia@udacity.com', {
    firstName: 'Julia',
    lastName: 'Van Cleve',
    role: 'Content Developer'
});
employees.set('richard@udacity.com', {
    firstName: 'Richard',
    lastName: 'Kalehoff',
    role: 'Content Developer'
});
console.log(employees);

// To remove key-value pairs, simply use the .delete() method.
employees.delete('julia@udacity.com');
employees.delete('richard@udacity.com');
console.log(employees);

// delete all key-value
employees.clear()
console.log(employees);


// The .delete() method returns true if a key-value pair is successfully deleted from the Map object, 
//    and false if unsuccessful.
// The return value of .set() is the Map object itself if successful.
