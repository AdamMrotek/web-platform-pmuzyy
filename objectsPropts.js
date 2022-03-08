const capitaliseKeys = (obj) => {
  let arrOfKeyValuePairs = Object.entries(obj);
  const arrWithUpperCasedKeys = arrOfKeyValuePairs.map((pair) => {
    console.log(typeof pair[0]);
    return [pair[0].toUpperCase(), pair[1]];
  });
  console.log(arrWithUpperCasedKeys);
  return Object.fromEntries(arrWithUpperCasedKeys);
  // arrOfUpperKeys.forEach(key)
  console.log(Object.entries(obj));
};
console.log(capitaliseKeys({ a: 1, b: 2, c: 3 }));
console.log(capitaliseKeys({}));

//String to object
////////////////////////
const stringToObject = (string) => {
  const arrayOfEntries = string.split(',').map((valuePair) => {
    return valuePair.split(':');
  });
  return Object.fromEntries(arrayOfEntries);
};
stringToObject(''); // Expected {}
console.log(stringToObject('a:1,b:2,c:3'));

//Going shopping
///////////////////
const shoppingList = (string) => {
  const arrayOfValues = string.split(',').map((valuePair) => {
    return valuePair.split(' ').reverse();
  });
  // No zero values
  const arrayOfValuesWithOutZero = arrayOfValues.filter(
    (item) => item[1] !== '0'
  );
  return Object.fromEntries(arrayOfValuesWithOutZero);
};

console.log(shoppingList('2 tomatoes, 1 egg, 3 pumpkins'));
console.log(shoppingList(''));
console.log(shoppingList('2 tomatoes, 1 egg, 0 pumpkins'));
shoppingList('2 tomatoes, 1 egg, 3 pumpkins');
// returns { tomatoes: 2, egg: 1, pumpkins: 3 }

shoppingList('');
// returns {}

shoppingList('2 tomatoes, 1 egg, 0 pumpkins');
// returns { tomatoes: 2, egg: 1 }

//Map Object
/////////////////

const mapObject = (obj, fn) => {
  // we use literal notation to create Obj
  const newObj = {};

  //Get key and then uses barket notation to assing that key to newObj
  // value of that key is also searched in original 'obj' and used as variable for function
  Object.keys(obj).forEach((item) => {
    newObj[item] = fn(obj[item]);
  });

  return newObj;
};

console.log(mapObject({ a: 1, b: 2 }, (n) => n + 2));
// returns { a: 3, b: 4 }

console.log(
  mapObject(
    { greeting: 'hi there, ', goodbye: 'see you later, ' },
    (s) => s + 'Yvonne'
  )
);
// returns { greeting: 'hi there, Yvonne', goodbye: 'see you later, Yvonne' }
