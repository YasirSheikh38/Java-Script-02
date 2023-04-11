// Program no 1

let num = 5;
function closure() {
    return function(num2) {
        console.log(num + num2);
    }
}
let innerFunction = closure();
innerFunction(15)
