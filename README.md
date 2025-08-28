# 🛒 Shopping Cart Application

A web-based shopping cart built with **HTML, CSS, and JavaScript**.  
It fetches products from the [Fake Store API](https://fakestoreapi.com/), allows filtering by categories, and includes **cart management with LocalStorage**.

---

## 🚀 Features
- 🔐 **User Authentication** (redirects to login if no user session).
- 📦 **Product Fetching** from Fake Store API.
- 🎨 **Random Colors & Sizes** added dynamically to each product.
- 🧾 **Category Filtering**:
  - Men's Clothing
  - Women's Clothing
  - Jewelry
  - Electronics
- 🛍️ **Shopping Cart**:
  - Add items to cart
  - Stored in LocalStorage
  - Render items with images, price & details
- 📱 **Tab Navigation** for categories.
- 🗂️ **Persistent Data** across reloads using LocalStorage.

---

## 🛠️ Tech Stack
- **Frontend:** HTML, CSS, JavaScript (ES6+)
- **API:** [Fake Store API](https://fakestoreapi.com/)
- **Storage:** LocalStorage (Browser)

---

## ⚡ How It Works
1. User logs in → session saved in LocalStorage.
2. Products are fetched from API (or retrieved from LocalStorage if cached).
3. Products are categorized and displayed with:
   - Price
   - Sizes
   - Colors
   - Ratings
4. Users can add products to the cart.
5. Cart items persist even after page reload.


---

## 🚀 Future Enhancements
- ✅ Manage **item quantities** in cart (instead of duplicates).
- ✅ Replace `alert()` with toast notifications.
- ✅ Add **checkout functionality**.
- ✅ User profile & order history.

---

## 🙌 Credits
- [Fake Store API](https://fakestoreapi.com/) for product data.
- Built by **Saurabh Khedkar** 💻
