// Program no 2

let myArray = [1, 2, 3, 4, 5];
     function search(array, value){
if (array.lenght === 0) {
    return false;
}     
else if (array[0] === value){
    return true;}

else {
    return search(array.slice(1), value);
}
     }
//console.log(search(myArray,3));
console.log(search(myArray,5))