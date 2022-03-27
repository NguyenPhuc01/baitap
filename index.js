

// var foodApi = 'https://6240617c2aeb48a9af735d49.mockapi.io/:endpoint'

// fetch(foodApi)
//     .then(response => response.json())
//     .then(function (response) {
//         var htmls = response.map(function (post) {
//             return `<li>
//            <h2>${post.title}</h2>
//            <p>${post.body}</p>

//            </li>`
//         })
//         var html = htmls.join('');
//         document.getElementById('post').innerHTML = html;
//     })
//     .catch(err => console.log(err));


const axios = require('axios');
async function create() {
    const data={
        name : "nguyen van Phuc",
       avatar: 'https://dbk.vn/uploads/ckfinder/images/1-content/anh-dep-1.jpg'
    }
    const api=await axios.post('https://624061412aeb48a9af735b00.mockapi.io/api/v1/users/',data);
console.log(api.data);
}



async function getDetail() {
  
    const api=await axios.get('https://624061412aeb48a9af735b00.mockapi.io/api/v1/users/1');
console.log(api.data);
}
async function Delete() {
  
    const api=await axios.delete('https://624061412aeb48a9af735b00.mockapi.io/api/v1/users/1');
console.log(api.data);
}
async function update() {
  
    const data={
        name : "nguyen van Phuc11",
       avatar: 'https://dbk.vn/uploads/ckfinder/images/1-content/anh-dep-1.jpg'
    }
    const api=await axios.put('https://624061412aeb48a9af735b00.mockapi.io/api/v1/users/2',data);
console.log(api.data);
}

async function get() {
    const api=await axios.get('https://624061412aeb48a9af735b00.mockapi.io/api/v1/users/');
    console.log('api ', api);
}

update()
