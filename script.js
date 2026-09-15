/* =================================
   CLIENT INFORMATION
================================= */

const CLIENT_INFO = {
    restaurantName: "LUMORA Restaurant & Grill",
    brandName: "LUMORA",
    logo: "",
    favicon: "favicon.png",
    phone: "+92 300 1234567",
    whatsapp: "923001234567",
    email: "hello@lumora.com",
    address: "123 Main Street, Your City, Pakistan",
    hours: "Monday – Sunday | 11:00 AM – 11:00 PM",
    mapQuery: "Lahore, Pakistan",
     currency: "$"
};



/* =================================
   MENU ITEMS
================================= */



const MENU_ITEMS = {
    "Lumora Classic": {
        price: 15
    },
    "Truffle Burger": {
        price: 18
    },
    "Margherita": {
        price: 14
    },
    "Truffle Artisan": {
        price: 18
    },
    "Prime Grilled Steak": {
        price: 29
    },
    "Herb Chicken": {
        price: 22
    },
    "Fresh Citrus Cooler": {
        price: 7
    },
    "Tropical Fizz": {
        price: 8
    },
    "Creamy Truffle Pasta":
    { price: 19 },
    "Truffle Artisan Pizza": {
        price: 21
    }
};


document.addEventListener("DOMContentLoaded", () => {

    const logoMark = document.querySelector(".client-logo-mark");
    const clientName = document.querySelector(".client-name");

    // ================================
    // TEXT LOGO
    // ================================

    if (logoMark) {
        logoMark.textContent = CLIENT_INFO.brandName.charAt(0).toUpperCase();
    }

    if (clientName) {
        clientName.textContent = CLIENT_INFO.brandName;
    }

    // ================================
    // IMAGE LOGO SUPPORT
    // ================================

    if (CLIENT_INFO.logo && CLIENT_INFO.logo.trim() !== "") {

        const logoImage = document.createElement("img");

        logoImage.src = CLIENT_INFO.logo;
        logoImage.alt = CLIENT_INFO.brandName + " Logo";

        logoImage.classList.add("client-logo-image");

        if (logoMark) {
            logoMark.innerHTML = "";
            logoMark.appendChild(logoImage);
        }

    }

});



document.addEventListener("DOMContentLoaded", () => {

    const logoMarks = document.querySelectorAll(".client-logo-mark");
    const clientNames = document.querySelectorAll(".client-name");

    // ================================
    // TEXT LOGO
    // ================================

    logoMarks.forEach(logoMark => {
        logoMark.textContent = CLIENT_INFO.brandName.charAt(0).toUpperCase();
    });

    clientNames.forEach(clientName => {
        clientName.textContent = CLIENT_INFO.brandName;
    });

    // ================================
    // IMAGE LOGO SUPPORT
    // ================================

    if (CLIENT_INFO.logo && CLIENT_INFO.logo.trim() !== "") {

        logoMarks.forEach(logoMark => {

            const logoImage = document.createElement("img");

            logoImage.src = CLIENT_INFO.logo;
            logoImage.alt = CLIENT_INFO.brandName + " Logo";
            logoImage.classList.add("client-logo-image");

            logoMark.innerHTML = "";
            logoMark.appendChild(logoImage);

        });

    }

});




// ================================
// DYNAMIC FAVICON
// ================================

const favicon = document.querySelector('link[rel="icon"]');

if (favicon && CLIENT_INFO.favicon) {
    favicon.href = CLIENT_INFO.favicon;
}


document.querySelectorAll(".featured-price").forEach(priceElement => {

    const foodCard = priceElement.closest(".food-card");

    if (!foodCard) return;

    const name = foodCard.querySelector("h3")?.textContent.trim();

    const menuData = MENU_ITEMS[name];

    if (!menuData) return;

    priceElement.textContent =
        `${CLIENT_INFO.currency}${menuData.price}`;
});





document.querySelectorAll(".menu-item").forEach(item => {

    const itemName = item.dataset.name;
    const menuData = MENU_ITEMS[itemName];

    if (!menuData) return;

    item.dataset.price = menuData.price;

    const priceElement = item.querySelector(".menu-item-title strong");

    if (priceElement) {
        priceElement.textContent = `${CLIENT_INFO.currency}${menuData.price}`;
    }

});


document.querySelectorAll(".client-hours").forEach(el => {
    el.textContent = CLIENT_INFO.hours;
});
document.querySelectorAll(".client-map").forEach(map => {
    map.src = `https://www.google.com/maps?q=${encodeURIComponent(CLIENT_INFO.mapQuery)}&output=embed`;
});

document.querySelectorAll(".client-address").forEach(el => {
    el.innerHTML = CLIENT_INFO.address.replace(/,\s*/g, "<br>");
});

document.querySelectorAll(".client-name").forEach(el => {
    el.textContent = CLIENT_INFO.brandName;
});
document.querySelectorAll(".client-phone").forEach(el => {
    el.textContent = CLIENT_INFO.phone;
    el.href = `tel:${CLIENT_INFO.phone.replace(/\s+/g, "")}`;
});
document.querySelectorAll(".client-email").forEach(el => {
    el.textContent = CLIENT_INFO.email;
    el.href = `mailto:${CLIENT_INFO.email}`;
});
document.querySelectorAll(".client-whatsapp").forEach(el => {
    el.href = `https://wa.me/${CLIENT_INFO.whatsapp}`;
});
document.addEventListener("DOMContentLoaded", () => {

    const navbar = document.querySelector(".navbar");

    /* =========================================
       MOBILE NAVIGATION
    ========================================= */

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-menu");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            menuToggle.classList.toggle("active");
        });

        navLinks.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
                menuToggle.classList.remove("active");
            });
        });
    }


    /* =========================================
       NAVBAR SCROLL EFFECT
    ========================================= */

    if (navbar) {
        let ticking = false;

        window.addEventListener("scroll", () => {

            if (!ticking) {

                window.requestAnimationFrame(() => {

                    if (window.scrollY > 50) {
                        navbar.classList.add("scrolled");
                    } else {
                        navbar.classList.remove("scrolled");
                    }

                    ticking = false;

                });

                ticking = true;
            }

        }, { passive: true });
    }

    /* =========================================
       CURRENT YEAR
    ========================================= */

    const yearElements = document.querySelectorAll("#year");

    yearElements.forEach(element => {
        element.textContent = new Date().getFullYear();
    });


    /* =========================================
       MENU CATEGORY FILTER
    ========================================= */

    const filterButtons = document.querySelectorAll(".filter-btn");
    const menuItems = document.querySelectorAll(".menu-item");

    if (filterButtons.length && menuItems.length) {

        filterButtons.forEach(button => {

            button.addEventListener("click", () => {

                filterButtons.forEach(btn => {
                    btn.classList.remove("active");
                });

                button.classList.add("active");

                const category = button.dataset.category;

                menuItems.forEach(item => {

                    if (
                        category === "all" ||
                        item.dataset.category === category
                    ) {
                        item.style.display = "";
                        item.style.opacity = "1";
                    } else {
                        item.style.display = "none";
                    }

                });

            });

        });

    }


    /* =========================================
       CART SYSTEM
    ========================================= */

    const cartOpenBtn = document.getElementById("cartOpenBtn");
    const cartClose = document.getElementById("cartClose");
    const cartOverlay = document.getElementById("cartOverlay");
    const cartDrawer = document.getElementById("cartDrawer");
    const cartItemsContainer = document.getElementById("cartItems");
    const cartCount = document.getElementById("cartCount");
    const cartTotal = document.getElementById("cartTotal");
    const checkoutWhatsapp = document.getElementById("checkoutWhatsapp");
    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    let cart = JSON.parse(localStorage.getItem("lumoraCart")) || [];


    /* -----------------------------------------
       SAVE CART
    ----------------------------------------- */

    function saveCart() {
        localStorage.setItem("lumoraCart", JSON.stringify(cart));
    }


    /* -----------------------------------------
       FORMAT PRICE
    ----------------------------------------- */

   function formatPrice(price) {
    return CLIENT_INFO.currency + Number(price).toFixed(0);
}


    /* -----------------------------------------
       OPEN CART
    ----------------------------------------- */

    function openCart() {

        if (!cartDrawer || !cartOverlay) return;

        cartDrawer.classList.add("active");
        cartOverlay.classList.add("active");

        document.body.style.overflow = "hidden";
    }


    /* -----------------------------------------
       CLOSE CART
    ----------------------------------------- */

    function closeCart() {

        if (!cartDrawer || !cartOverlay) return;

        cartDrawer.classList.remove("active");
        cartOverlay.classList.remove("active");

        document.body.style.overflow = "";
    }


    /* -----------------------------------------
       ADD ITEM TO CART
    ----------------------------------------- */

    function addToCart(item) {

        const existingItem = cart.find(
            cartItem => cartItem.name === item.name
        );

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                name: item.name,
                price: item.price,
                image: item.image,
                quantity: 1
            });
        }

        saveCart();
        renderCart();
    }


    /* -----------------------------------------
       REMOVE ITEM
    ----------------------------------------- */

    function removeFromCart(index) {

        cart.splice(index, 1);

        saveCart();
        renderCart();
    }


    /* -----------------------------------------
       CHANGE QUANTITY
    ----------------------------------------- */

    function changeQuantity(index, amount) {

        if (!cart[index]) return;

        cart[index].quantity += amount;

        if (cart[index].quantity <= 0) {
            cart.splice(index, 1);
        }

        saveCart();
        renderCart();
    }


    /* -----------------------------------------
       RENDER CART
    ----------------------------------------- */

    function renderCart() {

        if (!cartItemsContainer) return;

        if (cart.length === 0) {

            cartItemsContainer.innerHTML = `
                <div class="empty-cart">
                    <div class="empty-cart-icon">🛒</div>
                    <h3>Your cart is empty</h3>
                    <p>Add something delicious from our menu.</p>
                </div>
            `;

        } else {

            cartItemsContainer.innerHTML = cart.map((item, index) => {

                const itemTotal = item.price * item.quantity;

                return `
                    <div class="cart-item">

                        <div class="cart-item-image">
                            <img 
                                src="${item.image}" 
                                alt="${item.name}"
                                loading="lazy"
                            >
                        </div>

                        <div class="cart-item-info">

                            <h4>${item.name}</h4>

                            <div class="cart-item-price">
                                ${formatPrice(itemTotal)}
                            </div>

                            <div class="cart-item-controls">

                                <div class="quantity-controls">

                                    <button
                                        class="quantity-minus"
                                        data-index="${index}"
                                        aria-label="Decrease quantity"
                                    >
                                        −
                                    </button>

                                    <span>
                                        ${item.quantity}
                                    </span>

                                    <button
                                        class="quantity-plus"
                                        data-index="${index}"
                                        aria-label="Increase quantity"
                                    >
                                        +
                                    </button>

                                </div>

                                <button
                                    class="remove-item"
                                    data-index="${index}"
                                >
                                    Remove
                                </button>

                            </div>

                        </div>

                    </div>
                `;

            }).join("");

        }


        /* -----------------------------------------
           CART COUNT
        ----------------------------------------- */

        const totalQuantity = cart.reduce(
            (total, item) => total + item.quantity,
            0
        );

        if (cartCount) {
            cartCount.textContent = totalQuantity;
        }


        /* -----------------------------------------
           CART TOTAL
        ----------------------------------------- */

        const totalPrice = cart.reduce(
            (total, item) => total + (item.price * item.quantity),
            0
        );

        if (cartTotal) {
            cartTotal.textContent = formatPrice(totalPrice);
        }


        /* -----------------------------------------
           CART BUTTON EVENTS
        ----------------------------------------- */

        document.querySelectorAll(".quantity-minus").forEach(button => {

            button.addEventListener("click", () => {

                const index = Number(button.dataset.index);

                changeQuantity(index, -1);

            });

        });


        document.querySelectorAll(".quantity-plus").forEach(button => {

            button.addEventListener("click", () => {

                const index = Number(button.dataset.index);

                changeQuantity(index, 1);

            });

        });


        document.querySelectorAll(".remove-item").forEach(button => {

            button.addEventListener("click", () => {

                const index = Number(button.dataset.index);

                removeFromCart(index);

            });

        });

    }


    /* -----------------------------------------
       ADD TO CART BUTTONS
    ----------------------------------------- */

    if (addToCartButtons.length) {

        addToCartButtons.forEach(button => {

            button.addEventListener("click", () => {

                const menuItem = button.closest(".menu-item");

                if (!menuItem) return;

                const name = menuItem.dataset.name;
                const price = Number(menuItem.dataset.price);

                const imageElement = menuItem.querySelector("img");

                const image = imageElement
                    ? imageElement.getAttribute("src")
                    : "";

                addToCart({
                    name,
                    price,
                    image
                });


                /* Button feedback */

                const originalHTML = button.innerHTML;

                button.innerHTML = `
                    <span>✓</span>
                    Added to Cart
                `;

                button.classList.add("added");

                setTimeout(() => {

                    button.innerHTML = originalHTML;
                    button.classList.remove("added");

                }, 1200);

            });

        });

    }


    /* -----------------------------------------
       CART OPEN / CLOSE EVENTS
    ----------------------------------------- */

    if (cartOpenBtn) {
        cartOpenBtn.addEventListener("click", openCart);
    }

    if (cartClose) {
        cartClose.addEventListener("click", closeCart);
    }

    if (cartOverlay) {
        cartOverlay.addEventListener("click", closeCart);
    }


    /* -----------------------------------------
       ESC KEY CLOSE
    ----------------------------------------- */

    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {

            closeCart();

        }

    });


    /* -----------------------------------------
       PREMIUM WHATSAPP CART CHECKOUT
    ----------------------------------------- */

    if (checkoutWhatsapp) {

        checkoutWhatsapp.addEventListener("click", () => {

            if (cart.length === 0) {

                alert("Your cart is empty. Please add an item first.");

                return;
            }

         const whatsappNumber = CLIENT_INFO.whatsapp;
            let message =
                `*LUMORA RESTAURANT & GRILL*
━━━━━━━━━━━━━━━━━━━━

*NEW ORDER*

`;

            cart.forEach((item, index) => {

                const itemTotal = item.price * item.quantity;

                message +=
                    `${index + 1}. *${item.name}*
   Quantity: ${item.quantity}
   Price: ${formatPrice(item.price)} each
   Subtotal: ${formatPrice(itemTotal)}

`;

            });

            const totalPrice = cart.reduce(
                (total, item) =>
                    total + (item.price * item.quantity),
                0
            );

            const totalQuantity = cart.reduce(
                (total, item) =>
                    total + item.quantity,
                0
            );

            message +=
                `━━━━━━━━━━━━━━━━━━━━

*Total Items:* ${totalQuantity}
*ORDER TOTAL:* ${formatPrice(totalPrice)}

━━━━━━━━━━━━━━━━━━━━

Please confirm my order.

Thank you!`;

            const whatsappURL =
                `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

            window.open(whatsappURL, "_blank");

        });

    }

    /* -----------------------------------------
       INITIAL CART LOAD
    ----------------------------------------- */

    renderCart();


    /* =========================================
       CONTACT / RESERVATION FORM
    ========================================= */

    const contactForm = document.querySelector(".contact-form");

    if (contactForm) {

        const dateInput = contactForm.querySelector('input[type="date"]');

        if (dateInput) {

            const today = new Date();

            const year = today.getFullYear();
            const month = String(today.getMonth() + 1).padStart(2, "0");
            const day = String(today.getDate()).padStart(2, "0");

            dateInput.min = `${year}-${month}-${day}`;

        }


        contactForm.addEventListener("submit", event => {

            event.preventDefault();

            alert(
                "Thank you! Your request has been received. We will contact you shortly."
            );

            contactForm.reset();

        });

    }


    /* =========================================
       REVEAL ANIMATIONS
    ========================================= */

    const revealElements = document.querySelectorAll(
        ".reveal, .section-heading, .menu-item, .gallery-item, .review-card, .contact-card"
    );

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


        revealElements.forEach(element => {

            observer.observe(element);

        });

    } else {

        revealElements.forEach(element => {

            element.classList.add("visible");

        });

    }


    /* =========================================
       GALLERY LIGHTBOX
    ========================================= */

    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightboxImage");
    const lightboxClose = document.getElementById("lightboxClose");
    const lightboxPrev = document.getElementById("lightboxPrev");
    const lightboxNext = document.getElementById("lightboxNext");

    const galleryImages = Array.from(
        document.querySelectorAll(".gallery-item img")
    );

    let currentImageIndex = 0;


    function showLightboxImage(index) {

        if (!galleryImages.length) return;

        currentImageIndex =
            (index + galleryImages.length) %
            galleryImages.length;

        const image = galleryImages[currentImageIndex];

        if (lightboxImage) {

            lightboxImage.src = image.src;
            lightboxImage.alt = image.alt || "Gallery Image";

        }

    }


    function openLightbox(index) {

        if (!lightbox) return;

        showLightboxImage(index);

        lightbox.classList.add("active");

        document.body.style.overflow = "hidden";

    }


    function closeLightbox() {

        if (!lightbox) return;

        lightbox.classList.remove("active");

        document.body.style.overflow = "";

    }


    galleryImages.forEach((image, index) => {

        image.addEventListener("click", () => {

            openLightbox(index);

        });

    });


    if (lightboxClose) {

        lightboxClose.addEventListener("click", closeLightbox);

    }


    if (lightboxPrev) {

        lightboxPrev.addEventListener("click", () => {

            showLightboxImage(currentImageIndex - 1);

        });

    }


    if (lightboxNext) {

        lightboxNext.addEventListener("click", () => {

            showLightboxImage(currentImageIndex + 1);

        });

    }


    if (lightbox) {

        lightbox.addEventListener("click", event => {

            if (event.target === lightbox) {

                closeLightbox();

            }

        });

    }


    /* =========================================
       LIGHTBOX KEYBOARD CONTROLS
    ========================================= */

    document.addEventListener("keydown", event => {

        if (!lightbox || !lightbox.classList.contains("active")) {
            return;
        }

        if (event.key === "ArrowLeft") {

            showLightboxImage(currentImageIndex - 1);

        }

        if (event.key === "ArrowRight") {

            showLightboxImage(currentImageIndex + 1);

        }

    });


    /* =========================================
       FLOATING WHATSAPP BUTTON
    ========================================= */

    const whatsappButtons = document.querySelectorAll(
        ".whatsapp-btn, .floating-whatsapp"
    );

    whatsappButtons.forEach(button => {

        button.addEventListener("click", () => {

            const number = "923001234567";

            const message =
                "Hello Lumora Restaurant & Grill! I would like to know more about your menu.";

            const url =
                `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

            window.open(url, "_blank");

        });

    });


});
/* =========================================
   WHATSAPP RESERVATION SYSTEM
========================================= */

const reservationForm = document.getElementById("reservationForm");

if (reservationForm) {

    reservationForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const date = document.getElementById("date").value;
        const guests = document.getElementById("guests").value;
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !phone || !date || !guests) {
            alert("Please complete all required fields.");
            return;
        }

        const formattedDate = new Date(date + "T00:00:00")
            .toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric"
            });


        const whatsappMessage =
            `*LUMORA RESTAURANT & GRILL*
━━━━━━━━━━━━━━━━━━

*NEW TABLE RESERVATION*

*Name:* ${name}
*Email:* ${email}
*Phone:* ${phone}

*Date:* ${formattedDate}
*Guests:* ${guests}

*Special Request:*
${message || "None"}

━━━━━━━━━━━━━━━━━━

Please confirm my reservation.

Thank you!`;



        const whatsappURL =
    `https://wa.me/${CLIENT_INFO.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;

        window.open(whatsappURL, "_blank");

    });

}

// WhatsApp Feedback Form

const feedbackForm = document.getElementById("feedbackForm");

if (feedbackForm) {

    feedbackForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("feedbackName").value.trim();
        const rating = document.getElementById("feedbackRating").value;
        const message = document.getElementById("feedbackMessage").value.trim();

        if (!name || !rating || !message) {
            return;
        }

        const whatsappNumber = CLIENT_INFO.whatsapp;

        const whatsappMessage =
            `Hello ${encodeURIComponent(CLIENT_INFO.restaurantName)}!%0A%0A` +
            `*New Customer Feedback*%0A%0A` +
            `Name: ${encodeURIComponent(name)}%0A` +
            `Rating: ${encodeURIComponent(rating)}%0A%0A` +
            `Feedback:%0A${encodeURIComponent(message)}`;

        const whatsappURL =
            `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

        window.open(whatsappURL, "_blank");

    });

}

/* =================================
   APPLY CLIENT INFORMATION
================================= */

document.addEventListener("DOMContentLoaded", () => {

    // Restaurant name
    document.querySelectorAll(".client-name").forEach(element => {
        element.textContent = CLIENT_INFO.restaurantName;
    });

    // Phone
    document.querySelectorAll(".client-phone").forEach(element => {
        element.textContent = CLIENT_INFO.phone;
        element.href = `tel:${CLIENT_INFO.phone.replace(/\s+/g, "")}`;
    });

    // Email
    document.querySelectorAll(".client-email").forEach(element => {
        element.textContent = CLIENT_INFO.email;
        element.href = `mailto:${CLIENT_INFO.email}`;
    });

    // WhatsApp
    document.querySelectorAll(".client-whatsapp").forEach(element => {
        element.href = `https://wa.me/${CLIENT_INFO.whatsapp}`;
    });

});