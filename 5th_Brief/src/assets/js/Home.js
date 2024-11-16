 function displayProduct(){
    window.location.href='pages/BuyProduct.html';

  }
// Fetch and display all products initially -----------
let allProducts = [];
fetch('../../../DataBase/cart.json')
    .then(response => response.json())
    .then(data => {
        allProducts = data.products;
        displayProducts(allProducts);
    })
    .catch(error => console.error('Error loading JSON data:', error));
// Function to display products in HTML
function displayProducts(products) {
    const productContainer = document.getElementById('all_cards');
    productContainer.innerHTML = '';  // Clear previous results

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        productDiv.innerHTML =`
                         <div id="card1" class="card hover:shadow-xl hover:scale-105 duration-700 cursor-pointer text-white border border-solid border-black w-[300px] px-2 bg-slate-400">
                          <div class="Articl-name">
                            <h1 class="product-name text-center font-bold">[ ${product.name} ]</h1>
                          </div>
                          <div class="Articl-img">
                            <img class="product-img hover:scale-105 duration-1000 object-cover h-[200px]  w-[300px]" 
                            src="${product.image}"
                                alt="Product-img">
                         </div>
                        <div class="Article-type">
                            <h5 class="categories">${product.category}</h5>
                        </div>
                        <div class="price">
                            <div class="reduced font-bold"><mark>
                            ${product.discount_percentage}% off</mark> Limited time deal</div>
                            <div class="oldPrice"><del><p class="old-price">
                            ${product.old_price}$</p></del></div>
                            <div class="nowPrice font-bold text-lg"><p class="now-price">
                            ${product.new_price}$</p></div>
                        </div>
                        <div class="click flex justify-center mb-2 ">
        
                            <div class="BuyNow mx-2 ">
                                <button type="button" onclick="displayProduct()" class="hover:scale-110 duration-700 bg-MainColor rounded px-5 py-2">Buy Now</button>
                            </div>
                            <div class="Add Cart mx-5">
                                <button type="button" onclick="AddCart()" class="hover:scale-110 duration-500 bg-MainColor rounded px-5 py-2">Add Cart</button>
                            </div>
                        </div>
                    </div>
                    `;

        productContainer.appendChild(productDiv);
    });
}

// filtrage by searsh Bar
  function filterProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();

    const filteredProducts = allProducts.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm) ||
        (Array.isArray(product.category) 
            ? product.category.some(cat => cat.toLowerCase().includes(searchTerm)) 
            : product.category.toLowerCase().includes(searchTerm))
    );

    displayProducts(filteredProducts);
}
// Add-Cart
let count = 0;
function AddCart() {
  let countcart = document.getElementById("countcart");
  count++;
  countcart.textContent = count;
}
// start slide-carousel
const carousel = document.getElementById("carousel");
const slides = carousel.children;
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
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

let autoSlide = setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
}, 3000);

carousel.addEventListener("mouseenter", () => clearInterval(autoSlide));
carousel.addEventListener("mouseleave", () => {
  autoSlide = setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
  }, 3000);
});
// end slide-carousel
