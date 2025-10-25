const pricePerUnit = 1200;

// Update total dynamically
const qtyInput = document.getElementById("quantity");
const totalDisplay = document.getElementById("total");

qtyInput.addEventListener("input", function () {
  const qty = parseInt(this.value) || 0;
  totalDisplay.textContent = pricePerUnit * qty;
});

// Popup + WhatsApp
function showPopup(event) {
  event.preventDefault();

  const qty = parseInt(qtyInput.value) || 0;
  const total = qty * pricePerUnit;
  const phone = document.getElementById("whatsapp").value.trim();
  const account = "702 667 0330 (Nikemi - Opay)";

  if (!qty || !phone) {
    alert("Please fill in all details.");
    return;
  }

  document.getElementById("popup").style.display = "flex";

  setTimeout(() => {
    const message = `Hello Nikemi, I just paid for ${qty} yoghurt(s) (₦${total}).\n\nPayment sent to: ${account}.\nHere’s my WhatsApp number: ${phone}.`;
    const url = `https://wa.me/2347026670330?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }, 2000);
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

// Smooth scroll to order section
function scrollToOrder() {
  document.getElementById("order").scrollIntoView({ behavior: "smooth" });
}

// Burger menu
const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll("nav ul li a");

burger.addEventListener("click", (e) => {
  e.stopPropagation();
  nav.classList.toggle("active");
  burger.classList.toggle("open");
});

navLinks.forEach(link =>
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    burger.classList.remove("open");
  })
);

document.addEventListener("click", (e) => {
  if (!nav.contains(e.target) && !burger.contains(e.target)) {
    nav.classList.remove("active");
    burger.classList.remove("open");
  }
});
