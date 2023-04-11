// Program no 6

function saveToLocalStorage(key, obj) {
    
let json = JSON.stringify(obj);
  
    
localStorage.setItem(key, json);
}

let myObj = { name: "John", age: 30 };
saveToLocalStorage("my-key", myObj);
    