const products = [
    { id: 1, name: 'Product 1', price: 100, image: 'https://shorturl.asia/kKMDF' },
    { id: 2, name: 'Product 2', price: 200, image: 'https://shorturl.asia/VI71M' },
    { id: 3, name: 'Product 3', price: 300, image: 'https://shorturl.asia/IdVXL' },
];

// Display products
const productList = document.getElementById('productList');
products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('col-md-4', 'mb-4');
    productCard.innerHTML = `
        <div class="card">
            <img src="${product.image}" class="card-img-top" alt="${product.name}">
            <div class="card-body text-center">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text text-muted">$${product.price}</p>
                <button class="btn btn-primary add-to-cart" data-id="${product.id}">Add to Cart</button>
            </div>
        </div>
    `;
    productList.appendChild(productCard);
});

// Handle adding items to the cart
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function () {
        const productId = this.getAttribute('data-id');
        const product = products.find(p => p.id == productId);

        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));

        updateCart();
    });
});

// Update cart display
function updateCart() {
    const cartList = document.getElementById('cartList');
    cartList.innerHTML = '';
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartList.appendChild(li);
    });
}

// Handle checkout
document.getElementById('checkoutBtn').addEventListener('click', function () {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        alert('Your cart is empty.');
    } else {
        alert('Proceeding to checkout!');
        localStorage.removeItem('cart'); // Clear cart after checkout
        updateCart();
    }
});

// Initial cart update
updateCart();