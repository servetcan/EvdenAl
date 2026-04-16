# EvdenAl
A full-scale e-commerce platform built with Vanilla JS &amp; Bootstrap 5. Features a custom CAPTCHA, localStorage mock backend, full admin dashboard, and showcases AI-assisted development (Prompt Engineering).

🛒 EvdenAl: AI-Assisted E-Commerce Platform
A comprehensive, fully functional e-commerce web application concept built entirely with Vanilla JavaScript, HTML5, and Bootstrap 5. This project serves as a masterclass in AI-Assisted Development, demonstrating how complex front-end architectures, mock backends, and admin dashboards can be rapidly prototyped and deployed using structured prompt engineering.

🚀 About the Project
"EvdenAl" (Shop from Home) is a robust e-commerce simulation that provides a complete end-to-end shopping experience without relying on a real backend server. Instead, it utilizes an advanced localStorage architecture to mock database operations. From the user-facing storefront to a secure authentication system and a comprehensive administrative dashboard, every module was iteratively designed and coded through strategic AI prompts (PROMPTLAR.md).

✨ Key Features
🤖 AI-Driven Architecture: The entire codebase, including logic, UI, and state management, was structured and generated utilizing advanced prompt engineering techniques, showcasing modern AI-assisted developer workflows.

🛍️ Complete Storefront: Features dynamic product listings, category filtering, search functionality, and detailed product view pages (product-list.html, product-detail.html).

🛒 Dynamic Shopping Cart & Checkout: Real-time cart calculations, quantity adjustments, and a multi-step checkout process with comprehensive form validations (cart.js, checkout.html, validation.js).

🔐 Authentication & Custom CAPTCHA: Secure user registration, login, and profile management systems protected by a custom-built Vanilla JS CAPTCHA verification system (captcha.js, login.html, profile.html).

🎛️ Dedicated Admin Dashboard: A separate, secure administrative panel to manage inventory (add/edit/delete products), track orders, oversee user accounts, and view store analytics (dashboard.html, admin.js, admin.css).

💾 Local Storage Database: Completely serverless state management. All users, products, orders, and active carts are persisted securely within the browser's localStorage (main.js, admin.js).

🛠️ Technologies Used
Frontend Engine: HTML5, Custom CSS3 (style.css, responsive.css)

CSS Framework: Bootstrap 5.3.0

Icons: FontAwesome 6.0.0

Logic & Data: Vanilla JavaScript (ES6+), Web Storage API (localStorage)

Workflow: AI Prompt Engineering

📂 Project Structure
Plaintext
evdenal-ecommerce/
├── index.html               # Main storefront and hero section
├── product-list.html        # Dynamic catalog with category filtering
├── cart.html / checkout.html# Cart management and payment validation
├── login.html / register.html # User authentication flows
├── admin/                   # Administrative interface
│   ├── dashboard.html       # Admin analytics and overview
│   ├── products.html        # Inventory management table
│   └── users.html           # Customer account management
├── js/                      
│   ├── main.js              # Storefront logic and mock database init
│   ├── cart.js              # Shopping cart algorithms
│   ├── validation.js        # Regex-based form validation
│   ├── captcha.js           # Custom security CAPTCHA generator
│   └── admin.js             # Dashboard operations and data manipulation
├── css/                     # Global, responsive, and admin-specific styles
└── PROMPTLAR.md             # Documentation of AI prompts used for generation
⚙️ How to Run
Clone the repository to your local machine.

Ensure all files (HTML, CSS, JS) maintain their relative directory structures.

Open index.html in any modern web browser to view the storefront.

To access the Admin Panel, navigate to admin-login.html (simulated credentials can be found or created within the app logic).

Note: As this project uses localStorage, clearing your browser data will reset the store's state.

👨‍💻 Developer
Servet Can Kılınç
Front-End Software Development
