const bowl = {
  'apple': { color: 'red', weight: 136.078 },
  'banana': { color: 'yellow', weight: 183.151 },
  'orange': { color: 'orange', weight: 170.097 },
  'banana': { color: 'yellow', weight: 176.845 }
};

console.log(bowl);

/*
 En lugar de agregar otro plátano al tazón, 
 nuestro plátano anterior se sobrescribe con el nuevo plátano que se agrega al tazón. 
 Para solucionar este problema, podemos usar símbolos.
*/

const bowl_2 = {
  [Symbol('apple')]: { color: 'red', weight: 136.078 },
  [Symbol('banana')]: { color: 'yellow', weight: 183.15 },
  [Symbol('orange')]: { color: 'orange', weight: 170.097 },
  [Symbol('banana')]: { color: 'yellow', weight: 176.845 }
};

console.log(bowl_2);