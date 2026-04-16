// Admin panel JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Ürün ekleme formu
    const addProductForm = document.getElementById('addProductForm');
    if (addProductForm) {
        addProductForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(this);
            const product = {
                id: Date.now(), // Basit ID
                name: formData.get('productName'),
                price: parseFloat(formData.get('price')),
                description: formData.get('description'),
                image: formData.get('image') || 'https://picsum.photos/300/200?random=' + Date.now(),
                category: formData.get('category')
            };

            // Local storage'a ekle (gerçek uygulamada server'a gönder)
            let products = JSON.parse(localStorage.getItem('adminProducts')) || [];
            products.push(product);
            localStorage.setItem('adminProducts', JSON.stringify(products));

            alert('Ürün başarıyla eklendi!');
            this.reset();
            loadProducts(); // Ürün listesini güncelle
        });
    }

    // Sayfa yüklendiğinde fonksiyonları çalıştır
    loadProducts();
    loadCategories();
    loadOrders();
    loadUsers();
    updateDashboardStats();
});

// Ürünleri yükle ve tabloyu doldur
function loadProducts() {
    const tbody = document.getElementById('productsTable');
    if (tbody) {
        tbody.innerHTML = '';
        let products = JSON.parse(localStorage.getItem('adminProducts')) || [];

        products.forEach(product => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${product.id}</td>
                <td><img src="${product.image}" alt="${product.name}" style="width: 50px; height: 50px; object-fit: cover;"></td>
                <td>${product.name}</td>
                <td>${product.price} TL</td>
                <td>${product.category}</td>
                <td>
                    <button class="btn btn-sm btn-warning me-1" onclick="editProduct(${product.id})">Düzenle</button>
                    <button class="btn btn-sm btn-danger" onclick="deleteProduct(${product.id})">Sil</button>
                </td>
            `;
            tbody.appendChild(row);
        });
    }
}

// Ürün silme
function deleteProduct(id) {
    if (confirm('Bu ürünü silmek istediğinizden emin misiniz?')) {
        let products = JSON.parse(localStorage.getItem('adminProducts')) || [];
        products = products.filter(p => p.id !== id);
        localStorage.setItem('adminProducts', JSON.stringify(products));
        loadProducts(); // Listeyi güncelle
    }
}

// Ürün düzenleme
function editProduct(id) {
    let products = JSON.parse(localStorage.getItem('adminProducts')) || [];
    const product = products.find(p => p.id === id);
    if (product) {
        const newName = prompt('Yeni ürün adı:', product.name);
        const newPrice = prompt('Yeni fiyat:', product.price);
        const newCategory = prompt('Yeni kategori:', product.category);
        const newDescription = prompt('Yeni açıklama:', product.description || '');
        const newImage = prompt('Yeni görsel URL:', product.image);

        if (newName && newPrice && newCategory) {
            product.name = newName;
            product.price = parseFloat(newPrice);
            product.category = newCategory;
            product.description = newDescription;
            product.image = newImage;
            localStorage.setItem('adminProducts', JSON.stringify(products));
            alert('Ürün güncellendi!');
            loadProducts();
        }
    }
}

// Kategorileri yükle
function loadCategories() {
    const tbody = document.getElementById('categoriesTable');
    if (tbody) {
        tbody.innerHTML = '';
        // Örnek kategoriler
        const categories = [
            { id: 1, name: 'Bebek Mağazası', description: 'Bebek ürünleri' },
            { id: 2, name: 'Mobilya', description: 'Ev mobilyaları' },
            { id: 3, name: 'PC ve PlayStation Oyunları', description: 'Oyun ürünleri' },
            { id: 4, name: 'Kozmetik Ürünler', description: 'Kozmetik ve bakım' },
            { id: 5, name: 'Petshop Ürünleri', description: 'Evcil hayvan ürünleri' },
            { id: 6, name: 'Cep Telefonu ve Aksesuarları', description: 'Telefon aksesuarları' },
            { id: 7, name: 'Bilgisayar ve Aksesuarları', description: 'Bilgisayar ürünleri' },
            { id: 8, name: 'Ayakkabı', description: 'Ayakkabı ürünleri' }
        ];

        categories.forEach(cat => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${cat.id}</td>
                <td>${cat.name}</td>
                <td>${cat.description}</td>
                <td>
                    <button class="btn btn-sm btn-warning me-1">Düzenle</button>
                    <button class="btn btn-sm btn-danger">Sil</button>
                </td>
            `;
            tbody.appendChild(row);
        });
    }
}

// Siparişleri yükle
function loadOrders() {
    const tbody = document.getElementById('ordersTable');
    if (tbody) {
        tbody.innerHTML = '';
        let orders = JSON.parse(localStorage.getItem('adminOrders')) || [
            { id: 1001, customer: 'Ahmet Y.', total: 150.00, status: 'Hazırlanıyor', date: '2026-01-03' },
            { id: 1002, customer: 'Ayşe K.', total: 75.50, status: 'Gönderildi', date: '2026-01-02' }
        ];

        // Eğer localStorage boşsa, varsayılanları kaydet
        if (!localStorage.getItem('adminOrders')) {
            localStorage.setItem('adminOrders', JSON.stringify(orders));
        }

        orders.forEach(order => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${order.id}</td>
                <td>${order.customer}</td>
                <td>${order.total} TL</td>
                <td>
                    <select class="form-select" onchange="updateOrderStatus(${order.id}, this.value)">
                        <option value="Hazırlanıyor" ${order.status === 'Hazırlanıyor' ? 'selected' : ''}>Hazırlanıyor</option>
                        <option value="Kargoda" ${order.status === 'Kargoda' ? 'selected' : ''}>Kargoda</option>
                        <option value="Teslim Edildi" ${order.status === 'Teslim Edildi' ? 'selected' : ''}>Teslim Edildi</option>
                    </select>
                </td>
                <td>${order.date}</td>
                <td>
                    <button class="btn btn-sm btn-info">Detay</button>
                </td>
            `;
            tbody.appendChild(row);
        });
    }
}

// Sipariş durumu güncelle
function updateOrderStatus(id, status) {
    let orders = JSON.parse(localStorage.getItem('adminOrders')) || [];
    const orderIndex = orders.findIndex(o => o.id === id);
    if (orderIndex !== -1) {
        orders[orderIndex].status = status;
        localStorage.setItem('adminOrders', JSON.stringify(orders));
        alert(`Sipariş ${id} durumu "${status}" olarak güncellendi!`);
        loadOrders(); // Listeyi yeniden yükle
    }
}

// Kullanıcıları yükle
function loadUsers() {
    const tbody = document.getElementById('usersTable');
    if (tbody) {
        tbody.innerHTML = '';
        let users = JSON.parse(localStorage.getItem('adminUsers')) || [
            { id: 1, name: 'Ahmet Yılmaz', email: 'ahmet@example.com', role: 'Müşteri', status: 'Aktif' },
            { id: 2, name: 'Admin User', email: 'admin@example.com', role: 'Admin', status: 'Aktif' },
            { id: 3, name: 'Mehmet Demir', email: 'mehmet@example.com', role: 'Müşteri', status: 'Pasif' }
        ];

        // Eğer localStorage boşsa, varsayılanları kaydet
        if (!localStorage.getItem('adminUsers')) {
            localStorage.setItem('adminUsers', JSON.stringify(users));
        }

        users.forEach(user => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.role}</td>
                <td><span class="badge bg-${user.status === 'Aktif' ? 'success' : 'danger'}">${user.status}</span></td>
                <td>
                    <button class="btn btn-sm btn-warning me-1" onclick="toggleUserStatus(${user.id})">${user.status === 'Aktif' ? 'Pasif Yap' : 'Aktif Yap'}</button>
                    <button class="btn btn-sm btn-danger" onclick="deleteUser(${user.id})">Sil</button>
                </td>
            `;
            tbody.appendChild(row);
        });
    }
}

// Kullanıcı durumu değiştir
function toggleUserStatus(id) {
    let users = JSON.parse(localStorage.getItem('adminUsers')) || [];
    const userIndex = users.findIndex(u => u.id === id);
    if (userIndex !== -1) {
        users[userIndex].status = users[userIndex].status === 'Aktif' ? 'Pasif' : 'Aktif';
        localStorage.setItem('adminUsers', JSON.stringify(users));
        alert(`Kullanıcı ${id} durumu değiştirildi!`);
        loadUsers(); // Listeyi yeniden yükle
    }
}

// Kullanıcı silme
function deleteUser(id) {
    if (confirm('Bu kullanıcıyı silmek istediğinizden emin misiniz?')) {
        let users = JSON.parse(localStorage.getItem('adminUsers')) || [];
        users = users.filter(u => u.id !== id);
        localStorage.setItem('adminUsers', JSON.stringify(users));
        alert('Kullanıcı silindi!');
        loadUsers(); // Listeyi yeniden yükle
    }
}

// Dashboard istatistiklerini güncelle
function updateDashboardStats() {
    const totalProductsEl = document.getElementById('totalProducts');
    const totalOrdersEl = document.getElementById('totalOrders');
    const totalUsersEl = document.getElementById('totalUsers');

    if (totalProductsEl) {
        const products = JSON.parse(localStorage.getItem('adminProducts')) || [];
        totalProductsEl.textContent = products.length;
    }

    if (totalOrdersEl) {
        const orders = JSON.parse(localStorage.getItem('adminOrders')) || [];
        totalOrdersEl.textContent = orders.length;
    }

    if (totalUsersEl) {
        const users = JSON.parse(localStorage.getItem('adminUsers')) || [];
        totalUsersEl.textContent = users.length;
    }
}
