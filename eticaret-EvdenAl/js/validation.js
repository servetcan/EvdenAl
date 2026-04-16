// Form validation for register.html, login.html, and checkout.html
document.addEventListener('DOMContentLoaded', function() {
    // Register form
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();
            validateRegisterForm();
        });
    }

    // Login form
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            validateLoginForm();
        });
    }

    // Checkout form
    const checkoutForm = document.getElementById('checkoutForm');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', function(event) {
            event.preventDefault();
            validateCheckoutForm();
        });
    }
});

function validateRegisterForm() {
    const errorMessages = document.getElementById('errorMessages');
    errorMessages.innerHTML = '';

    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const captchaInput = document.getElementById('captchaInput').value.trim();

    let errors = [];

    if (!firstName) errors.push('Ad alanı boş bırakılamaz.');
    if (!lastName) errors.push('Soyad alanı boş bırakılamaz.');
    if (!email) errors.push('E-posta alanı boş bırakılamaz.');
    if (!password) errors.push('Şifre alanı boş bırakılamaz.');
    if (!confirmPassword) errors.push('Şifre tekrar alanı boş bırakılamaz.');
    if (!captchaInput) errors.push('CAPTCHA alanı boş bırakılamaz.');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailRegex.test(email)) {
        errors.push('Geçerli bir e-posta adresi giriniz.');
    }

    if (password && password.length < 6) {
        errors.push('Şifre en az 6 karakter olmalıdır.');
    }

    if (password && confirmPassword && password !== confirmPassword) {
        errors.push('Şifreler eşleşmiyor.');
    }

    if (captchaInput && !verifyCaptcha(captchaInput)) {
        errors.push('CAPTCHA yanlış girildi.');
    }

    // Kullanıcı zaten kayıtlı mı kontrol et
    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.find(user => user.email === email)) {
        errors.push('Bu e-posta adresi zaten kayıtlı.');
    }

    if (errors.length > 0) {
        errorMessages.innerHTML = errors.map(error => `<p>${error}</p>`).join('');
    } else {
        // Kullanıcıyı kaydet
        const newUser = { firstName, lastName, email, password };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        alert('Kayıt başarılı! Ana sayfaya yönlendiriliyorsunuz.');
        window.location.href = 'index.html';
    }
}

function validateLoginForm() {
    const errorMessages = document.getElementById('errorMessages');
    errorMessages.innerHTML = '';

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const captchaInput = document.getElementById('captchaInput').value.trim();

    let errors = [];

    if (!email) errors.push('E-posta alanı boş bırakılamaz.');
    if (!password) errors.push('Şifre alanı boş bırakılamaz.');
    if (!captchaInput) errors.push('CAPTCHA alanı boş bırakılamaz.');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailRegex.test(email)) {
        errors.push('Geçerli bir e-posta adresi giriniz.');
    }

    if (captchaInput && !verifyCaptcha(captchaInput)) {
        errors.push('CAPTCHA yanlış girildi.');
    }

    // Kullanıcı kontrolü
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) {
        errors.push('Geçersiz e-posta veya şifre.');
    }

    if (errors.length > 0) {
        errorMessages.innerHTML = errors.map(error => `<p>${error}</p>`).join('');
    } else {
        // Giriş başarılı, oturum başlat
        localStorage.setItem('currentUser', JSON.stringify(user));
        alert('Giriş başarılı! Müşteri paneline yönlendiriliyorsunuz.');
        window.location.href = 'customer/dashboard.html';
    }
}

function validateCheckoutForm() {
    const errorMessages = document.getElementById('errorMessages');
    errorMessages.innerHTML = '';

    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const address = document.getElementById('address').value.trim();
    const cardNumber = document.getElementById('cardNumber').value.trim();
    const expiryDate = document.getElementById('expiryDate').value.trim();
    const cvv = document.getElementById('cvv').value.trim();
    const captchaInput = document.getElementById('captchaInput').value.trim();

    let errors = [];

    if (!firstName) errors.push('Ad alanı boş bırakılamaz.');
    if (!lastName) errors.push('Soyad alanı boş bırakılamaz.');
    if (!address) errors.push('Adres alanı boş bırakılamaz.');
    if (!cardNumber) errors.push('Kart numarası boş bırakılamaz.');
    if (!expiryDate) errors.push('Son kullanma tarihi boş bırakılamaz.');
    if (!cvv) errors.push('CVV boş bırakılamaz.');
    if (!captchaInput) errors.push('CAPTCHA alanı boş bırakılamaz.');

    // Kart numarası kontrolü (basit, 16 hane)
    if (cardNumber && !/^\d{16}$/.test(cardNumber)) {
        errors.push('Geçerli bir kart numarası giriniz (16 hane).');
    }

    // Expiry date kontrolü (MM/YY)
    if (expiryDate && !/^\d{2}\/\d{2}$/.test(expiryDate)) {
        errors.push('Son kullanma tarihini MM/YY formatında giriniz.');
    }

    // CVV kontrolü (3 hane)
    if (cvv && !/^\d{3}$/.test(cvv)) {
        errors.push('Geçerli bir CVV giriniz (3 hane).');
    }

    if (captchaInput && !verifyCaptcha(captchaInput)) {
        errors.push('CAPTCHA yanlış girildi.');
    }

    if (errors.length > 0) {
        errorMessages.innerHTML = errors.map(error => `<p>${error}</p>`).join('');
    } else {
        alert('Ödeme başarılı! Siparişiniz alındı.');
        localStorage.removeItem('cart');
        window.location.href = 'index.html';
    }
}
