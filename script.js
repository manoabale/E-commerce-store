const products = [
  { id: 1, name: "T-shirt", price: 15 },
  { id: 2, name: "Sneakers", price: 60 },
  { id: 3, name: "Cap", price: 10 },
];

const productsDiv = document.getElementById("products");
const cartList = document.getElementById("cart");
const totalEl = document.getElementById("total");

let cart = [];

function renderProducts() {
  productsDiv.innerHTML = "";
  products.forEach((p) => {
    const div = document.createElement("div");
    div.textContent = `${p.name} - £${p.price}`;
    const btn = document.createElement("button");
    btn.textContent = "Add";
    btn.onclick = () => addToCart(p);
    div.appendChild(btn);
    productsDiv.appendChild(div);
  });
}

function renderCart() {
  cartList.innerHTML = "";
  let total = 0;
  cart.forEach((item) => {
    total += item.price;
    const li = document.createElement("li");
    li.textContent = `${item.name} - £${item.price}`;
    cartList.appendChild(li);
  });
  totalEl.textContent = total.toFixed(2);
}

function addToCart(product) {
  cart.push(product);
  renderCart();
}

renderProducts();
renderCart();
