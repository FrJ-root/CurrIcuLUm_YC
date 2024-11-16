let fileJson = "../../../DataBase/cart.json";
let products = [];
fetch(fileJson).then((response) => response.json()).then((data) => {
    products = data.products;
        displayProducts(products);
})
function displayProducts(productsToDisplay) {
  const Allcards = document.getElementById("allCard");
  Allcards.innerHTML = "";
  productsToDisplay.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
      <div class="card w-62 flex flex-col rounded justify-stretch">
                        <img src="${product.image}" alt="pic1"
                            class="rounded h-60">
                        <p>${product.description}</p>
                        <div class="flex items-center">
                            <svg class="w-4 h-4 text-yellow-300 me-1"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor" viewBox="0 0 22 20">
                                <path
                                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg class="w-4 h-4 text-yellow-300 me-1"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor" viewBox="0 0 22 20">
                                <path
                                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg class="w-4 h-4 text-yellow-300 me-1"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor" viewBox="0 0 22 20">
                                <path
                                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg class="w-4 h-4 text-yellow-300 me-1"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor" viewBox="0 0 22 20">
                                <path
                                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg
                                class="w-4 h-4 text-gray-300 me-1 dark:text-gray-500"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor" viewBox="0 0 22 20">
                                <path
                                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <p
                                class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">4.95</p>
                            <p
                                class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">out
                                of</p>
                            <p
                                class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">5</p>
                        </div>
                        <p class="text-sm">${product.bought}</p>
                        <p class="text-3xl font-bold"><del>${product.old_price}</del></p>
                        <p class="text-3xl font-bold">${product.new_price}</p>
                        <p>Delivery <strong>${product.delivery}</strong></p>
                        <p>Ships to Morocco</p>
                        <div class="flex place-content-around">
                            <button id="btn-add" type="button"
                                class="btn bg-emerald-950 w-32 focus:outline-none text-white hover:bg-teal-300 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900" onclick="addCard(${product.id})">Add
                                to cart</button>
                            <a href="#" onclick="like(${product.id})"><img id="likely"
                                    src="/src/assets/images/love.png"
                                    alt="love" class="w-8 h-8"></a>
                        </div>
                    </div>`;
    
    Allcards.appendChild(productDiv);
  });
}


// ----------locale Storage



let productcounter = 0;
let likecounter = 0;
const counter = document.getElementById('countcart');
const counter2 = document.getElementById('countcart2');

function like(productId){
  const produitFav = products.filter((el) => el.id === productId)[0];
  let panierFav = JSON.parse(localStorage.getItem("panierFav")) || [];
   if (produitFav) {
     const produitExist = panierFav.find((item) => item.id === produitFav.id);
     if (produitExist) {
       alert( "Product deja ajouter" )
     } else {
      panierFav.push({ ...produitFav });
       likecounter++;
       counter.textContent = likecounter;
     }
     localStorage.setItem("panierFav", JSON.stringify(panierFav));
     localStorage.setItem("countFav", JSON.stringify(likecounter));
   }
}
function addCard(productId){
  const produit = products.filter((el) => el.id === productId)[0];
  let panier = JSON.parse(localStorage.getItem("panier")) || [];
   if (produit) {
     const produitExist = panier.find((item) => item.id === produit.id);
     if (produitExist) {
       alert( "Product deja ajouter" )
     } else {
       panier.push({ ...produit });
       productcounter++;
       counter.textContent = productcounter;
     }
     localStorage.setItem("panier", JSON.stringify(panier));
     localStorage.setItem("count", JSON.stringify(productcounter));
   }
}


// -------------------



// Btn.addEventListener('click', () => {
//   productcounter++;
//   counter.innerHTML = `<span>${productcounter}</span>`
// });

// love.addEventListener('click', () => {
//   likecounter++;
//   counter2.innerHTML = `<span>${likecounter}</span>`
// });



// -------------------



const Swipe = document.getElementById("Swipe");
const slides = Swipe.children;
let currentIndex = 0;
document.getElementById("next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
});
document.getElementById("prev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel();
});
function updateCarousel() {
  Swipe.style.transform = `translateX(-${currentIndex * 100}%)`;
}
let autoSlide = setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
}, 3000);
Swipe.addEventListener("mouseenter", () => clearInterval(autoSlide));
Swipe.addEventListener("mouseleave", () => {
  autoSlide = setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
  }, 3000);
});



// ------------------Search



function displayProducts(filteredProducts) {
  const productList = document.getElementById("allCard");
  productList.innerHTML = "";
  filteredProducts.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");
    productElement.innerHTML = `
      <div class="card w-62 flex flex-col rounded justify-stretch">
                        <img src="${product.image}" alt="pic1"
                            class="rounded h-60">
                        <p>${product.description}</p>
                        <div class="flex items-center">
                            <svg class="w-4 h-4 text-yellow-300 me-1"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor" viewBox="0 0 22 20">
                                <path
                                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg class="w-4 h-4 text-yellow-300 me-1"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor" viewBox="0 0 22 20">
                                <path
                                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg class="w-4 h-4 text-yellow-300 me-1"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor" viewBox="0 0 22 20">
                                <path
                                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg class="w-4 h-4 text-yellow-300 me-1"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor" viewBox="0 0 22 20">
                                <path
                                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg
                                class="w-4 h-4 text-gray-300 me-1 dark:text-gray-500"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor" viewBox="0 0 22 20">
                                <path
                                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <p
                                class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">4.95</p>
                            <p
                                class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">out
                                of</p>
                            <p
                                class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">5</p>
                        </div>
                        <p class="text-sm">${product.bought}</p>
                        <p class="text-3xl font-bold"><del>${product.old_price}</del></p>
                        <p class="text-3xl font-bold">${product.new_price}</p>
                        <p>Delivery <strong>${product.delivery}</strong></p>
                        <p>Ships to Morocco</p>
                        <div class="flex place-content-around">
                            <button id="btn-add" type="button"
                                class="btn bg-emerald-950 w-32 focus:outline-none text-white hover:bg-teal-300 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900" onclick="addCard(${product.id})">Add
                                to cart</button>
                            <a href="#"><img id="likely"
                                    src="/src/assets/images/love.png"
                                    alt="love" class="w-8 h-8" onclick="Like()"></a>
                        </div>
                    </div>`;
    allCard.appendChild(productElement);
  });
}
displayProducts(products);
function filterCategory(category) {
  const filteredProducts = category
    ? products.filter(product => 
        Array.isArray(product.category) && product.category.includes(category)) : products;
  displayProducts(filteredProducts);
}
document.getElementById("Clothes").addEventListener("change", (event) => {
  const isChecked = event.target.checked;
  const filteredProducts = isChecked
    ? products.filter(product => 
        Array.isArray(product.category) && product.category.includes("Clothes")) : products;
  displayProducts(filteredProducts);
});
document.getElementById("Beauty").addEventListener("change", (event) => {
  filterCategory(event.target.checked ? "Beauty" : null);
});
document.getElementById("Electronics").addEventListener("change", (event) => {
  filterCategory(event.target.checked ? "Electronics" : null);
});
document.getElementById("Books").addEventListener("change", (event) => {
  filterCategory(event.target.checked ? "Books" : null);
});
document.getElementById("Headphones").addEventListener("change", (event) => {
  filterCategory(event.target.checked ? "Headphones" : null);
});
document.getElementById("Phones").addEventListener("change", (event) => {
  filterCategory(event.target.checked ? "Phones" : null);
});
document.getElementById("Men").addEventListener("change", (event) => {
  filterCategory(event.target.checked ? "Men" : null);
});
document.getElementById("Women").addEventListener("change", (event) => {
  filterCategory(event.target.checked ? "Women" : null);
});