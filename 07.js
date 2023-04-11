// Program no 7

function getObjectFromLocalStorage(key) {
let objectString = localStorage.getItem(key);
let object = JSON.parse(objectString);
return object;
}

let myObject = getObjectFromLocalStorage('myKey');