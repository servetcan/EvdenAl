// Ana sayfa için ürün verileri ve fonksiyonlar
const products = [
    { id: 1, name: 'Bebek Bezi', price: 50, category: 'bebek', image: 'https://images.pexels.com/photos/3875089/pexels-photo-3875089.jpeg', discount: 0.2 },
    { id: 2, name: 'Koltuk', price: 500, category: 'mobilya', image: 'https://images.pexels.com/photos/5644368/pexels-photo-5644368.jpeg' },
    { id: 3, name: 'Oyun Konsolu', price: 2000, category: 'oyun', image: 'https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg', discount: 0.3 },
    { id: 4, name: 'Şampuan', price: 30, category: 'kozmetik', image: 'https://images.pexels.com/photos/3735657/pexels-photo-3735657.jpeg' },
    { id: 5, name: 'Köpek Maması', price: 40, category: 'petshop', image: 'https://images.pexels.com/photos/8473518/pexels-photo-8473518.jpeg', discount: 0.15 },
    { id: 6, name: 'Akıllı Telefon', price: 3000, category: 'telefon', image: 'https://images.pexels.com/photos/34624326/pexels-photo-34624326.jpeg' },
    { id: 7, name: 'Laptop', price: 5000, category: 'bilgisayar', image: 'https://images.pexels.com/photos/7583935/pexels-photo-7583935.jpeg' },
    { id: 8, name: 'Spor Ayakkabı', price: 150, category: 'ayakkabi', image: 'https://images.pexels.com/photos/2225727/pexels-photo-2225727.jpeg' }
];

function createProductCard(product) {
    const discountedPrice = product.discount ? (product.price * (1 - product.discount)).toFixed(2) : product.price;
    const priceDisplay = product.discount ?
        `<span class="text-decoration-line-through text-muted">${product.price} TL</span> <span class="text-danger fw-bold">${discountedPrice} TL</span> <span class="badge bg-danger">-${(product.discount * 100).toFixed(0)}%</span>` :
        `${product.price} TL`;
    return `
        <div class="col-md-3 mb-3">
            <div class="card product-card">
                <img src="${product.image}" class="card-img-top" alt="${product.name}" style="height: 200px; object-fit: cover;">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${priceDisplay}</p>
                    <a href="product-detail.html?id=${product.id}" class="btn btn-primary">Detay</a>
                    <button class="btn btn-success" onclick="addToCart(${product.id})">Sepete Ekle</button>
                </div>
            </div>
        </div>
    `;
}

function loadFeaturedProducts() {
    const featured = products.slice(0, 4);
    const container = document.getElementById('featuredProducts');
    container.innerHTML = featured.map(createProductCard).join('');
}

function loadAIRecommendations() {
    const recommendations = products.slice(4, 8);
    const container = document.getElementById('aiRecommendations');
    container.innerHTML = recommendations.map(createProductCard).join('');
}

function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const product = products.find(p => p.id === productId);
    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Ürün sepete eklendi!');
}

document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('featuredProducts')) {
        loadFeaturedProducts();
    }
    if (document.getElementById('aiRecommendations')) {
        loadAIRecommendations();
    }
});
