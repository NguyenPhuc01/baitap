// bài 1

const arr = [0, 5, 4, 2, 8]
function sumArray() {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(sumArray());

// bài 2
const person = [
    { name: 'John', age: 24 },
    { name: 'Pete', age: 25 },
    { name: 'Mary', age: 28 },
]
const ten = person.map(x => x.name);
console.log(ten);
//  bai 3
arr1 = ['John', 'Pete', 'Mary']
arr2 = ['Mary', 'Henry', 'Harry']
var arr3 = arr1.concat(arr2)

const uniqueSet = new Set(arr3);
console.log(uniqueSet);
