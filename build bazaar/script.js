// Product Data

const products = [

    {
        id: 1,
        name: "TMT Steel Bar",
        category: "Steel",
        price: 65,
        icon: "🏗️"
    },

    {
        id: 2,
        name: "Portland Cement",
        category: "Cement",
        price: 4200,
        icon: "🧱"
    },

    {
        id: 3,
        name: "Red Clay Bricks",
        category: "Bricks",
        price: 1220,
        icon: "🧱"
    },

    {
        id: 4,
        name: "PVC Water Pipe",
        category: "Pipes",
        price: 3550,
        icon: "🚰"
    },

    {
        id: 5,
        name: "MS Steel Angle",
        category: "Steel",
        price: 1172,
        icon: "🔩"
    },

    {
        id: 6,
        name: "Construction Hammer",
        category: "Hardware",
        price: 5550,
        icon: "🔨"
    }

];


// Cart

let cart = [];


// Display Products

function displayProducts(productArray = products) {

    const productList =
        document.getElementById("product-list");

    productList.innerHTML = "";

    productArray.forEach(product => {

        productList.innerHTML += `

            <div class="product">

                <div class="product-image">
                    ${product.icon}
                </div>

                <div class="product-info">

                    <h3>${product.name}</h3>

                    <p class="category-name">
                        ${product.category}
                    </p>

                    <p class="price">
                        ₹${product.price}
                    </p>

                    <button onclick="addToCart(${product.id})">
                        Add to Cart
                    </button>

                </div>

            </div>

        `;

    });

}


// Add to Cart

function addToCart(productId) {

    const product =
        products.find(p => p.id === productId);

    cart.push(product);

    document.getElementById("cart-count").innerText =
        cart.length;

    alert(product.name + " added to cart!");

}


// Display Cart

function showCart() {

    const cartBox =
        document.getElementById("cart-box");

    const cartItems =
        document.getElementById("cart-items");

    cartBox.style.display = "block";

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach(item => {

        total += item.price;

        cartItems.innerHTML += `

            <div class="cart-item">

                <span>${item.name}</span>

                <span>₹${item.price}</span>

            </div>

        `;

    });

    document.getElementById("cart-total").innerText =
        total;

}


// Close Cart

function closeCart() {

    document.getElementById("cart-box")
        .style.display = "none";

}


// Search Products

function searchProducts() {

    const search =
        document.getElementById("search")
        .value
        .toLowerCase();

    const result =
        products.filter(product =>
            product.name.toLowerCase().includes(search) ||
            product.category.toLowerCase().includes(search)
        );

    displayProducts(result);

}


// Filter Category

function filterCategory(category) {

    const result =
        products.filter(product =>
            product.category === category
        );

    displayProducts(result);

    document.getElementById("products")
        .scrollIntoView();
}


// Shop Now

function scrollToProducts() {

    document.getElementById("products")
        .scrollIntoView();

}


// Login

function login() {

    alert("Login page will be connected with Python Flask.");

}


// Checkout

function checkout() {

    if (cart.length === 0) {

        alert("Your cart is empty!");

    } else {

        alert(
            "Checkout system will be connected with the backend."
        );

    }

}


// Load Products

displayProducts();