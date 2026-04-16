// Sepet yönetimi
document.addEventListener('DOMContentLoaded', function() {
    loadCart();
});

function loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const container = document.getElementById('cartItems');
    let total = 0;
    if (cart.length === 0) {
        container.innerHTML = '<p>Sepetiniz boş.</p>';
        document.getElementById('totalPrice').textContent = '0';
        return;
    }
    container.innerHTML = cart.map(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        return `
            <div class="card mb-3">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-2">
                            <img src="${item.image}" class="img-fluid" alt="${item.name}">
                        </div>
                        <div class="col-md-4">
                            <h5>${item.name}</h5>
                        </div>
                        <div class="col-md-2">
                            <p>${item.price} TL</p>
                        </div>
                        <div class="col-md-2">
                            <button class="btn btn-sm btn-secondary" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                            <span class="mx-2">${item.quantity}</span>
                            <button class="btn btn-sm btn-secondary" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                        </div>
                        <div class="col-md-2">
                            <p>${itemTotal} TL</p>
                            <button class="btn btn-sm btn-danger" onclick="removeFromCart(${item.id})">Kaldır</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
    document.getElementById('totalPrice').textContent = total;
}

function updateQuantity(productId, newQuantity) {
    if (newQuantity <= 0) {
        removeFromCart(productId);
        return;
    }
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = newQuantity;
        localStorage.setItem('cart', JSON.stringify(cart));
        loadCart();
    }
}

function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
}
