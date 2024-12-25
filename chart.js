// script.js

let cart = [
    { id: 1, name: 'สินค้า A', price: 100, quantity: 1 },
    { id: 2, name: 'สินค้า B', price: 200, quantity: 2 },
];

function renderCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';
    
    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
            <p>${item.name} - ฿${item.price}</p>
            <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${item.id}, this.value)">
            <p>฿${item.price * item.quantity}</p>
        `;
        cartItemsContainer.appendChild(itemElement);
    });

    updateTotalPrice();
}

function updateQuantity(id, quantity) {
    const item = cart.find(item => item.id === id);
    if (item) {
        item.quantity = parseInt(quantity);
        renderCart();
    }
}

function updateTotalPrice() {
    const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    document.getElementById('total-price').textContent = `${totalPrice} บาท`;
}

function checkout() {
    alert('ขอบคุณสำหรับการช้อปปิ้ง! กำลังดำเนินการชำระเงิน...');
}

// เรียกใช้งานฟังก์ชัน renderCart ตอนโหลดหน้า
renderCart();