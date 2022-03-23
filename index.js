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
        viec2(function () {
            console.log('DA XONG CONG VIEC!!!!');
        });
    });
}
main()