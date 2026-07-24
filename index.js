const cartCountEl = document.querySelector(".cart-count");
const cards = document.querySelectorAll(".card");

const hamburgerBtn = document.getElementById("hamburgerBtn");
const navMenu = document.getElementById("navMenu");

const cartOverlay = document.getElementById("cartOverlay");
const cartTableBody = document.getElementById("cartTableBody");
const cartEmptyMsg = document.getElementById("cartEmptyMsg");
const cartTotalEl = document.getElementById("cartTotal");

const cartTrigger = document.querySelector(".far-right-content");
const closeCartBtn = document.getElementById("closeCart");
const continueBtn = document.getElementById("continueShopping");
const checkoutBtn = document.getElementById("checkoutBtn");

const detailsOverlay = document.getElementById("detailsOverlay");
const closeDetailsBtn = document.getElementById("closeDetails");
const nameInput = document.getElementById("customerName");
const emailInput = document.getElementById("customerEmail");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const proceedBtn = document.getElementById("proceedToPaystack");

let cart = []; 

function findCartItem(name) {
    return cart.find(item => item.name === name);
}

function findCard(name) {
    return [...cards].find(card => card.dataset.name === name);
}

function updateCartCount() {
    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    cartCountEl.textContent = totalQty;
}

function updateCardButton(card, inCart) {
    const button = card.querySelector(".add-cart");
    const priceEl = card.querySelector(".price");

    if (inCart) {
        button.textContent = "REMOVE FROM CART";
        button.classList.add("in-cart");
        priceEl.style.display = "block";
    } else {
        button.textContent = "ADD TO CART";
        button.classList.remove("in-cart");
        priceEl.style.display = "none";
    }
}

function renderCart() {
    cartTableBody.innerHTML = "";
    cartEmptyMsg.style.display = cart.length === 0 ? "block" : "none";

    let total = 0;

    cart.forEach((item, index) => {
        total += item.price * item.qty;

        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${item.name}</td>
            <td>$${item.price}</td>
            <td>
                <div class="qty-control">
                    <button class="qty-btn decrease" data-name="${item.name}">-</button>
                    <span>${item.qty}</span>
                    <button class="qty-btn increase" data-name="${item.name}">+</button>
                </div>
            </td>
            <td><button class="remove-btn" data-name="${item.name}">REMOVE</button></td>
        `;

        cartTableBody.appendChild(row);
    });

    cartTotalEl.textContent = `$${total}`;
    updateCartCount();
}

cards.forEach(card => {
    const button = card.querySelector(".add-cart");
    const priceEl = card.querySelector(".price");
    const product = {
        name: card.dataset.name,
        price: Number(card.dataset.price)
    };

    priceEl.textContent = `$${product.price}`;

    button.addEventListener("click", () => {
        const existing = findCartItem(product.name);

        if (existing) {
            cart = cart.filter(item => item.name !== product.name);
            updateCardButton(card, false);
        } else {
            cart.push({ ...product, qty: 1 });
            updateCardButton(card, true);
        }

        renderCart();
    });
});


cartTableBody.addEventListener("click", (e) => {
    const name = e.target.dataset.name;
    if (!name) return;

    const item = findCartItem(name);
    if (!item) return;

    const card = findCard(name);

    if (e.target.classList.contains("increase")) {
        item.qty++;
    }

    if (e.target.classList.contains("decrease")) {
        item.qty--;
        if (item.qty <= 0) {
            cart = cart.filter(i => i.name !== name);
            if (card) updateCardButton(card, false);
        }
    }

    if (e.target.classList.contains("remove-btn")) {
        cart = cart.filter(i => i.name !== name);
        if (card) updateCardButton(card, false);
    }

    renderCart();
});


function closeCartModal() {
    cartOverlay.classList.remove("active");
}

// Open modal
cartTrigger.addEventListener("click", () => {
    cartOverlay.classList.add("active");
    renderCart();
});

closeCartBtn.addEventListener("click", closeCartModal);


continueBtn.addEventListener("click", closeCartModal);

cartOverlay.addEventListener("click", (e) => {
    if (e.target === cartOverlay) {
        closeCartModal();
    }
});

hamburgerBtn.addEventListener("click", () => {
    hamburgerBtn.classList.toggle("active");
    navMenu.classList.toggle("active");
});

navMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        hamburgerBtn.classList.remove("active");
        navMenu.classList.remove("active");
    });
});

const summaryOverlay = document.getElementById("summaryOverlay");
const summaryHeading = document.getElementById("summaryHeading");
const summaryMessage = document.getElementById("summaryMessage");
const summaryTableBody = document.getElementById("summaryTableBody");
const summaryTotal = document.getElementById("summaryTotal");
const summaryOkBtn = document.getElementById("summaryOkBtn");

function showSummaryModal(purchasedItems, total, reference, customerName) {
    summaryHeading.textContent = "Purchase Successful!";
    summaryMessage.textContent = `Thank you, ${customerName}! Your order (Ref: ${reference}) has been confirmed.`;

    summaryTableBody.innerHTML = "";
    purchasedItems.forEach(item => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.qty}</td>
            <td>$${item.price * item.qty}</td>
        `;
        summaryTableBody.appendChild(row);
    });

    summaryTotal.textContent = `$${total}`;
    summaryOverlay.classList.add("active");
}

summaryOkBtn.addEventListener("click", () => {
    location.reload(); // wipes cart, customer data, everything — clean slate
});


checkoutBtn.addEventListener("click", () => {
    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }

    closeCartModal();
    detailsOverlay.classList.add("active");
});


proceedBtn.addEventListener("click", () => {
    if (!validateDetails()) return;

    const customerName = nameInput.value.trim();
    const customerEmail = emailInput.value.trim();

    const purchasedItems = cart.map(item => ({ ...item }));
    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

    closeDetailsModal();

    const handler = PaystackPop.setup({
       key: "pk_test_146b3375eae0864f4c314836af7ded9f2e3f6c30", // replace with your actual public key
        email: customerEmail,
        amount: total * 100,
        currency: "GHS",
        callback: function (response) {
            showSummaryModal(purchasedItems, total, response.reference, customerName);
        },
        onClose: function () {
            alert("Payment window closed.");
        }
    });

    handler.openIframe();
});

function validateDetails() {
    let isValid = true;

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name.length < 2) {
        nameError.textContent = "Please enter your full name.";
        nameInput.classList.add("invalid");
        isValid = false;
    } else {
        nameError.textContent = "";
        nameInput.classList.remove("invalid");
    }

    if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        emailInput.classList.add("invalid");
        isValid = false;
    } else {
        emailError.textContent = "";
        emailInput.classList.remove("invalid");
    }

    return isValid;
}

function closeDetailsModal() {
    detailsOverlay.classList.remove("active");
}

closeDetailsBtn.addEventListener("click", closeDetailsModal);

detailsOverlay.addEventListener("click", (e) => {
    if (e.target === detailsOverlay) {
        closeDetailsModal();
    }
});