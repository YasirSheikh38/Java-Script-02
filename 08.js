// Program no 8

function saveObjectToLocalStorage(object) {
for (let key in object) {
localStorage.setItem(key, JSON.stringify(object[key]));
}
const newObject = {};
for (let i = 0; i < localStorage.length; i++) {
let key = localStorage.key(i);
let valueString = localStorage.getItem(key);
let value = JSON.parse(valueString);
newObject[key] = value;
}
return newObject;
}

let myObject = { name: 'John', age: 30, city: 'New York' };
let newObject = saveObjectToLocalStorage(myObject);
console.log(newObject);
    