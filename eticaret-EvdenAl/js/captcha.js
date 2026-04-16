// CAPTCHA functionality
let captchaCode = '';

function generateCaptcha() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    captchaCode = '';
    for (let i = 0; i < 5; i++) {
        captchaCode += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById('captchaText').textContent = captchaCode;
}

function verifyCaptcha(input) {
    return input.toUpperCase() === captchaCode;
}

// Generate CAPTCHA on page load
document.addEventListener('DOMContentLoaded', generateCaptcha);
