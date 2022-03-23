// bai 1

function myFunction(doiSo1) {
    doiSo1('hello')
}
function myCallback(value) {
    console.log('value:', value);
}
myFunction(myCallback)




// baif 2

function viec1(congViec) {
    congViec();
}

function viec2(congViec) {
    congViec();
}
function main() {
    viec1(function () {
        console.log('viec 1');
        viec2(function () {
            console.log('DA XONG CONG VIEC!!!!');
        });
    });
}
main()

// Map
Array.prototype.mymap = function (callback) {
    const resultArray = [];
    for (let index = 0; index < this.length; index++) {
        resultArray.push(callback(this[index], index, this));
    }
    return resultArray;

}
const mang = [1, 2, 3]
var output = mang.mymap(function (val, index, array) {
    console.log(val, index, array);

})




//forEach
Array.prototype.myForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i]);
    }
};

function callback(element) {
    console.log(element); //insert logic
}

var array = [2, 4, 6, 8, 10];
array.myForEach(callback);

