const productList = document.getElementById("product-list");
const totalPrice = document.getElementById("total");
const section1 = document.getElementById("section1");
const section2 = document.getElementById("section2");
const section3 = document.getElementById("section3");
const formulaire = document.getElementById("formulaire");

let totalArray = [];
let localPanier = JSON.parse(localStorage.getItem("panier"));
let localCounter = localStorage.getItem("count");

if (localPanier.length == 0) {
  productList.innerHTML = "no pruducts added to the cart!";
  totalPrice.textContent = 0;
} else {
  localPanier.forEach((el) => {
    let productElement = document.createElement("div");
    productElement.setAttribute(
      "class",
      `product${el.id} bg-white rounded-lg shadow-lg p-6 flex items-center space-x-6`
    );
    productElement.innerHTML = `
    <img class="w-32 h-32 object-cover rounded-lg" src="${el.image}" alt="${
      el.name
    }">
          <div class="flex-1">
            <h3 class="text-xl font-semibold text-gray-800">${el.name}</h3>
            <p class="text-sm text-gray-600">${
              el.description || "Une description courte du produit"
            }</p>
            <div class="flex items-center justify-between mt-4">
            <span id="price${
              el.id
            }" class="text-lg font-semibold text-gray-800">€${
      el.new_price
    }</span>
              <div class="flex items-center space-x-4">
                <input oninput="multiplication(this.value,${
                  el.id
                })" type="number" value="1" min="1" class="w-16 h-10 text-center border rounded-md text-gray-800" />
                <button class="text-red-500 hover:text-red-700 font-semibold" onclick="removeProduct(${
                  el.id
                },${totalArray} )">Supprimer</button>
              </div>
            </div>
            </div>
            `;
    productList.appendChild(productElement);
    totalArray.push(el.new_price);
  });
  reducedPrice(totalArray);
}

function removeProduct(removeId) {
  const element = document.querySelector(`.product${removeId}`);
  const index = localPanier.findIndex((el) => el.id === removeId);
  if (index !== -1) {
    localPanier.splice(index, 1);
    localStorage.setItem("panier", JSON.stringify(localPanier));
    element.remove();
    localCounter--;
    localStorage.setItem("count", localCounter);
    totalArray.splice(index, 1);
    if (totalArray.length == 0) {
      productList.innerHTML = "no pruducts added to the cart!";
    }
    reducedPrice(totalArray);
  }
}

function multiplication(quantity, id) {
  localPanier.forEach((el, index) => {
    if (el.id === id) {
      const spanPrice = document.getElementById(`price${id}`);
      let multiplePrice = el.new_price * quantity;
      spanPrice.textContent = `€${multiplePrice.toFixed(2)}`;
      totalArray[index] = multiplePrice;
      reducedPrice(totalArray);
    }
  });
}
function reducedPrice(totalArray) {
  let total = 0;
  totalArray.map((el) => {
    total += el;
  });

  totalPrice.textContent = total.toFixed(2);
}
// nextSection
function nextSection() {
  
    section1.style.display = "none";
    section2.style.display = "flex";
  
}
function prevSection() {
  
    section1.style.display = "flex";
    section2.style.display = "none";
 
}

formulaire.onsubmit = function (event) {
  event.preventDefault();
  section3.style.display = "flex";
};
