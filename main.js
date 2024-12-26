const API_BASE_URL = "http://localhost:5000";

document.addEventListener("DOMContentLoaded", () => {
  loadNavbar();
  loadFooter();
  loadHomePage();
});

// Navigation
function loadNavbar() {
  document.getElementById("navbar").innerHTML = `
    <nav>
      <a href="#" onclick="loadHomePage()">Home</a>
      <a href="#" onclick="loadProductPage()">Products</a>
      <a href="#" onclick="loadCartPage()">Cart</a>
      <a href="#" onclick="loadCheckoutPage()">Checkout</a>
      <a href="#" onclick="loadUserAccount()">Account</a>
      <a href="#" onclick="loadAdminDashboard()">Admin</a>
    </nav>
  `;
}

function loadFooter() {
  document.getElementById("footer").innerHTML = `
    <p>&copy; 2024 Online Shopping Website</p>
  `;
}

// Homepage
function loadHomePage() {
  document.getElementById("content").innerHTML = `
    <!-- Header -->
    <header>
      <div class="logo">
        <a href="index.html">RoudShop</a>
      </div>
      <nav>
        <ul>
          <li><a href="products.html">Products</a></li>
          <li><a href="offers.html">Offers</a></li>
          <li><a href="login"><i class="fa-sharp fa-solid fa-user"></i></a></li>
          <li><a href="cart"><i class="fa-sharp fa-solid fa-bag-shopping"></i></a></li>
        </ul>
      </nav>
    </header>
    
    <div class="small-header">
      <p>NEW HERE? Get 20% off selected styles!<br>With code: IMNZ</p>
    </div>

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-images">
        <div class="hero-image">
          <img src="https://i.pinimg.com/736x/a8/f0/a2/a8f0a2d92f14dc4c3031672d87d0b53b.jpg" alt="Women image">
        </div>
        <div class="hero-image">
          <img src="https://i.pinimg.com/736x/5c/c4/ea/5cc4ea53e8f08412e611a728716776f9.jpg" alt="Men image">
        </div>
        <h1 class="hero-title">This is RoudShop</h1>
      </div>
    </section>
    
    <!-- Featured Products Section -->
    <section id="products">
      <div class="featured-div"><h2 id="featured-title">Featured Products</h2></div>
      <div class="product-grid">
        <div class="product">
          <img src="https://i.pinimg.com/236x/aa/7c/b8/aa7cb89c89e067401dce31e8116ef329.jpg" alt="Product 1">
          <h3>Maroon Vest</h3>
          <p>$55</p>
        </div>
        <div class="product">
          <img src="https://i.pinimg.com/236x/a6/57/5e/a6575e481d6e145a56fa5a76f8ef3939.jpg" alt="Product 2">
          <h3>Dark Wash Jeans</h3>
          <p>$45</p>
        </div>
        <div class="product">
          <img src="https://i.pinimg.com/236x/86/ee/76/86ee76c73a10b68affc258353dde3b26.jpg" alt="Product 3">
          <h3>Brown Double Faced Jacket</h3>
          <p>$100</p>
        </div>
        <div class="product">
          <img src="https://i.pinimg.com/236x/25/84/69/2584691f185c10683f1d66b6aa576e2b.jpg" alt="Product 3">
          <h3>Beige Coat</h3>
          <p>$99</p>
        </div>
      </div>
    </section>
  `;
}

// Product Page
function loadProductPage() {
  document.getElementById("content").innerHTML = `
    <div class="container">
      <div id="filters">
        <label for="category">Category:</label>
        <select id="category" onchange="filterProducts()">
          <option value="all">All</option>
          <option value="men">Men</option>
          <option value="women">Women</option>
        </select>
      </div>
      <div id="product-list"></div>
    </div>
  `;
  fetchProducts();
}

function filterProducts() {
  const category = document.getElementById('category').value;
  fetchProducts(category);
}

function fetchProducts(category = 'all') {
  fetch(`${API_BASE_URL}/products?category=${category}`)
    .then(response => response.json())
    .then(products => {
      const productList = document.getElementById("product-list");
      productList.innerHTML = '';
      products.forEach(product => {
        productList.innerHTML += `
          <div class="product">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
          </div>
        `;
      });
    });
}
// Cart Page
function loadCartPage() {
    document.getElementById("content").innerHTML = `
      <div class="container">
        <h1>Your Shopping Cart</h1>
        <div id="cart-items"></div>
        <p><strong>Total: $<span id="cart-total"></span></strong></p>
        <button onclick="loadCheckoutPage()">Proceed to Checkout</button>
      </div>
    `;
    displayCartItems();
  }
  
  // Checkout Page
  function loadCheckoutPage() {
    document.getElementById("content").innerHTML = `
      <div class="container">
        <h1>Checkout</h1>
        <form id="checkout-form">
          <label for="full-name">Full Name:</label>
          <input type="text" id="full-name" name="full-name" placeholder="Enter your full name" required>
  
          <label for="email">Email Address:</label>
          <input type="email" id="email" name="email" placeholder="Enter your email address" required>
  
          <label for="address">Shipping Address:</label>
          <input type="text" id="address" name="address" placeholder="Enter your shipping address" required>
  
          <label for="city">City:</label>
          <input type="text" id="city" name="city" placeholder="Enter your city" required>
  
          <label for="postal-code">Postal Code:</label>
          <input type="text" id="postal-code" name="postal-code" placeholder="Enter your postal code" required>
  
          <label for="payment-method">Payment Method:</label>
          <select id="payment-method" name="payment-method" required>
            <option value="credit-card">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="bank-transfer">Bank Transfer</option>
          </select>
  
          <button type="submit">Complete Checkout</button>
        </form>
  
        <div class="checkout-summary">
          <h3>Order Summary</h3>
          <p>Items: 3</p>
          <p>Subtotal: $150.00</p>
          <p>Shipping: $10.00</p>
          <p class="total">Total: $160.00</p>
        </div>
      </div>
    `;
    document.getElementById('checkout-form').addEventListener('submit', submitCheckout);
  }
  
