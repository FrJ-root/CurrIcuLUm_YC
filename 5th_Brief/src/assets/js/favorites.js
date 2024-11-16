
let products =[] 

var slider_img = document.querySelector(".slider-img");
var imges = ["imgSlide2.jpg", "imgSlide1.jpg", "imgSlide3.jpg"];
var i = 0;
function prev() {
  if (i <= 0) i = imges.length;
  i--;

  return setimge();
}

function next() {
  if (i >= imges.length - 1) i = -1;
  i++;

  return setimge();
}

function setimge() {
  return slider_img.setAttribute("src", "../assets/images/" + imges[i]);
}





const mostPopPorducts = document.querySelector("#aa")
const jsonFile ="/DataBase/cart.json";

 fetch(jsonFile).then((respone) => {
  return respone.json(); 
 }).then( data => {
  products=data.products;
  localStorage.setItem("products", JSON.stringify(data.products));
  if(!localStorage.getItem("cart")){
    localStorage.setItem("cart", "[]");
  }
  data.products.map(product => {
    const { id ,name, new_price ,old_price , image} = product;
    mostPopPorducts.innerHTML += `
     <div class="card  border border-solid border-black px-2 w-[300px] bg-slate-400" >
      <div class="Articl-name ">
          <h1>${name}</h1>
      </div>
      <div class="Articl-img">
          <img class="object-cover h-[200px]  w-[300px]"  src="${image}" alt="${name}">
      </div>
      <div class="Article-type id="${id}">
          <h5>${name}</h5>
      </div>
      <div class="price">
          <div class="reduced font-bold"><mark>27% off</mark> Limited time deal</div>
          <div class="old-price"><del>${old_price}$</del></div>
          <div class="now-price font-bold text-lg">${new_price}$</div>
      </div>
      <div class="click flex justify-center mb-2">
          <div class="BuyNow mx-2">
              <button type="button" class="bg-MainColor rounded px-5 py-2">Buy Now</button>
          </div>
          <div class="Add Cart mx-5 ">
              <button type="button" class="bg-MainColor rounded px-5 py-2">Add Favori</button>
          </div>
      </div>
  </div>
   `
  })
 }) 

  

 

// let product = JSON.parse(localStorage.getItem("products"));
// let cart =JSON.parse(localStorage.getItem("cart"));

// function addItemToCarat(productId){
//   let product = products.find(function(product){
//     return product.id == productId;
//   });
//   if(cart.length==0){
//         cart.push(product);
//   }else{
//     let res =cart.find(element => products.id == productId);
//     if(res === undefined){
//       cart.push(product);
//     }
//   }
//  localStorage.setItem("cart",JSON.stringify(cart));
// }
// addItemToCarat(1);
// addItemToCarat(2);
// addItemToCarat(3);
