const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

// Close menu when a link is clicked
document.querySelectorAll(".nav-links li a").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
  }),
);

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Optional: Subtle Parallax for the Background Text
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const watermark = document.querySelector('.bg-watermark');
        watermark.style.transform = `translateX(-50%) translateY(${scrolled * 0.1}px)`;
    });
});

// ══════════════════════════════════════════════════════════════
// CONFIG — replace with your actual published Google Sheet URL
// ══════════════════════════════════════════════════════════════
const SHEET_API_URL = "YOUR_GOOGLE_SHEET_API_URL";
// Expected columns: id | name | category | image | shortDescription | fullDescription
// Publish sheet: Extensions → Apps Script → deploy as web app, or
// use SheetDB / SheetBest proxy and paste the JSON endpoint above.

// ══════════════════════════════════════════════════════════════
// SAMPLE DATA (used when API URL is not set / for demo purposes)
// ══════════════════════════════════════════════════════════════
const SAMPLE_PRODUCTS = [

  // POULTRY PRODUCTS--

  {
id: "1",
name: "NS VIT AD3",
category: "Poultry",
image: "https://i.postimg.cc/vZdpHC91/10.png",
shortDescription: "Multivitamin to optimize animal growth",
fullDescription: "Removes stress (heat, vaccination, debeaking, transport). Ensures uniform growth in chicks. Improves production, fertility, and hatchability."
},
{
id: "2",
name: "Ns GTH Plus Ultra",
category: "Poultry",
image: "https://i.postimg.cc/YCfT48fg/11.png",
shortDescription: "Vitamins, amino acids & biotin blend",
fullDescription: "Supports deficiencies, improves growth, FCR, immunity, fertility, and hatchability."
},
{
id: "3",
name: "Nutri Curcumin Plus",
category: "Poultry",
image: "https://i.postimg.cc/K8ydvCLv/8.png",
shortDescription: "Turmeric-based natural growth enhancer",
fullDescription: "Boosts feed intake, digestion, immunity, liver & kidney protection, and performance."
},
{
id: "4",
name: "Nutri Aci Plus",
category: "Poultry",
image: "https://i.postimg.cc/y8zwY29B/7.png",
shortDescription: "Buffered organic acid with garlic extract",
fullDescription: "Controls pathogens, improves feed quality, regulates gut pH, balances microflora."
},
{
id: "5",
name: "NS-Crd",
category: "Poultry",
image: "https://i.postimg.cc/Qx72DjBx/6.png",
shortDescription: "Respiratory infection support",
fullDescription: "Relieves cough, sneezing, congestion. Reduces mortality and improves breathing and performance."
},
{
id: "6",
name: "Nutri Gutcare Plus",
category: "Poultry",
image: "https://i.postimg.cc/fyGf5nZ7/19.png",
shortDescription: "Gut hygiene & antimicrobial support",
fullDescription: "Reduces gut infections, improves nutrient absorption, supports recovery from bacterial infections."
},
{
id: "7",
name: "Nutri-Immonoextra",
category: "Poultry",
image: "p7.jpg",
shortDescription: "Immunity booster with beta-glucans",
fullDescription: "Enhances immunity, improves vaccination response, increases disease resistance."
},
{
id: "8",
name: "NS Liv Care",
category: "Poultry",
image: "https://i.postimg.cc/PfCG6WTr/21.png",
shortDescription: "Advanced liver tonic",
fullDescription: "Supports detox, improves digestion, egg production, shell quality, and growth."
},
{
id: "9",
name: "Mint-C Plus",
category: "Poultry",
image: "https://i.postimg.cc/PqX91Z2S/13.png",
shortDescription: "Vitamin C with chromium & lemon extract",
fullDescription: "Improves electrolyte balance, immunity, cooling effect, and production performance."
},
{
id: "10",
name: "Nutri Garlic",
category: "Poultry",
image: "p10.jpg",
shortDescription: "Natural antimicrobial growth enhancer",
fullDescription: "Controls infections, boosts immunity, improves feed intake, weight gain, and meat quality."
},
{
id: "11",
name: "Nutri-Premix",
category: "Poultry",
image: "p11.jpg",
shortDescription: "Vitamin premix for production",
fullDescription: "Improves feed efficiency, growth, immunity, and eggshell quality."
},
{
id: "12",
name: "Nutri Min - Org",
category: "Poultry",
image: "p12.jpg",
shortDescription: "Organic trace minerals",
fullDescription: "Improves bone health, egg quality, flock uniformity, and feed nutrition value."
},
{
id: "13",
name: "Ns Cal-P",
category: "Poultry",
image: "https://i.postimg.cc/rF4BTqD3/4.png",
shortDescription: "Calcium & phosphorus supplement",
fullDescription: "Strengthens bones, improves eggshell quality, hatchability, and reduces breakage."
},
{
id: "14",
name: "Ns Cal Granules",
category: "Poultry",
image: "p14.png",
shortDescription: "Calcium granules for production",
fullDescription: "Improves shell strength, prevents weakness, and supports skeletal development."
},
{
id: "15",
name: "Nutri Secure",
category: "Poultry",
image: "p155.jpg",
shortDescription: "Multi-spectrum disinfectant",
fullDescription: "Non-toxic disinfectant effective even in organic matter. Suitable for hatcheries and farms."
},
{
id: "16",
name: "Nutri Secure (P)",
category: "Poultry",
image: "p16.jpg",
shortDescription: "Disinfectant powder",
fullDescription: "Used for surface & water disinfection. Effective during outbreaks and organic conditions."
},

// POULTRY PRODUCTS--

//-------------------------------------------------------------------------------------------------------------------------//

// CATTLE PRODUCTS--


{
id: "1",
name: "NS Rumino Plus",
category: "Dog",
image: "https://i.postimg.cc/wxZCn1j2/2.png",
shortDescription: "Rumenotoric for ketosis management",
fullDescription: "Helps manage ketosis by reducing fatty acid release, improving energy output, maintaining rumen pH, and supplying essential vitamins, minerals, and amino acids."
},
{
id: "2",
name: "NS Hepacarex",
category: "Dog",
image: "https://i.postimg.cc/DyG9h7Sg/3.png",
shortDescription: "Liver tonic with yeast extracts & vitamins",
fullDescription: "Supports appetite, digestion, and liver health. Useful in fatty liver, enlargement, and post-deworming recovery. Acts as a growth promoter."
},
{
id: "3",
name: "NS Farticare",
category: "Dog",
image: "c3.jpg",
shortDescription: "Mineral support for reproductive health",
fullDescription: "Improves conception rate, induces natural heat, and accelerates uterine recovery process."
},
{
id: "4",
name: "NS VIT - H",
category: "Dog",
image: "https://i.postimg.cc/vZdpHC91/10.png",
shortDescription: "Stress and immunity support tonic",
fullDescription: "Reduces pre/postpartum and heat stress, boosts immunity, improves udder health, milk production, and recovery from mastitis."
},
{
id: "5",
name: "Ns Cal",
category: "Dog",
image: "https://i.postimg.cc/x1yBkgy6/12.png",
shortDescription: "Calcium and mineral supplement",
fullDescription: "Improves calcium levels, immunity, udder health, milk yield, hoof strength, and prevents lameness."
},
{
id: "6",
name: "Nutri A 2 Z",
category: "Dog",
image: "https://i.postimg.cc/R0SywfX8/14.png",
shortDescription: "Production rejuvenator for high-yield animals",
fullDescription: "Enhances mineral absorption, feed intake, and immunity. Helps reduce mastitis and supports reproductive health."
},
{
id: "7",
name: "NS Milkplus",
category: "Dog",
image: "https://i.postimg.cc/L5c3vKR4/18.png",
shortDescription: "Milk production enhancer",
fullDescription: "Stimulates milk synthesis and ejection by improving hormone secretion and udder cell regeneration."
},

// CATTLE PRODUCTS--

//-------------------------------------------------------------------------------------------------------------------------//

// SWINE PRODUCTS--

{
id: "1",
name: "NS Liv Swine",
category: "Swine",
image: "s1.jpg",
shortDescription: "Improves growth, weight gain and FCR",
fullDescription: "Special liver support formulation for pigs. Enhances liver function, corrects liver disorders, improves feed intake and digestion. Recommended for poor growth and low body weight."
},
{
id: "2",
name: "NS Gutcare Swine",
category: "Swine",
image: "https://i.postimg.cc/fyGf5nZ7/19.png",
shortDescription: "Improves digestion and gut health",
fullDescription: "Enhances gut health, boosts growth performance, acts as an antioxidant, strengthens immunity, increases feed intake, reduces heat stress and lowers pre-weaning mortality."
},

// SWINE PRODUCTS--

//-------------------------------------------------------------------------------------------------------------------------//

// AQUA PRODUCTS--

{
id: "1",
name: "Nutri Secure Aqua",
category: "Aqua",
image: "a1.png",
shortDescription: "Potent disinfectant for aquaculture",
fullDescription: "Effective in high organic load and all water sources. Controls vibriosis in shrimp and fish. Works as a stress-free sanitizer without harming plankton. Helps prevent diseases like red disease, tail rot, and gill rot."
},
{
id: "2",
name: "Nutri Cal Plus Aqua",
category: "Aqua",
image: "a2.jpg",
shortDescription: "Calcium supplement with high bioavailability",
fullDescription: "Provides calcium and phosphorus in organic form for better absorption. Supports bone strength, muscle function, enzyme activation, and improves productivity and hatchability."
},
{
id: "3",
name: "NS Liv Care Aqua",
category: "Aqua",
image: "a3.jpg",
shortDescription: "Liver support and immunity booster",
fullDescription: "Stimulates liver function, improves feed conversion ratio, enhances immunity, and supports better digestion, absorption, body weight, and overall fish health."
},
{
id: "4",
name: "NS Gutcare Aqua",
category: "Aqua",
image: "a4.jpg",
shortDescription: "Gut health and microflora management",
fullDescription: "Improves digestion and nutrient absorption, strengthens immunity, controls pathogens, enhances gut structure, and improves water quality."
},
{
id: "5",
name: "GTH Plus Aqua",
category: "Aqua",
image: "https://i.postimg.cc/YCfT48fg/11.png",
shortDescription: "Growth and immunity enhancer",
fullDescription: "Contains vitamins, minerals, amino acids, and growth stimulants. Improves feed conversion, enhances immunity, increases survival rate, and reduces stress in fish and shrimp."
}

// AQUA PRODUCTS--

];

// ══════════════════════════════════════════════════════════════
// STATE
// ══════════════════════════════════════════════════════════════
let allProducts = [];
let activeCategory = "All";

// ══════════════════════════════════════════════════════════════
// FETCH DATA
// ══════════════════════════════════════════════════════════════
async function fetchProducts() {
  if (SHEET_API_URL === "YOUR_GOOGLE_SHEET_API_URL") {
    return SAMPLE_PRODUCTS;
  }
  try {
    const res = await fetch(SHEET_API_URL);
    if (!res.ok) throw new Error("Network error");
    const data = await res.json();
    // Support both array and {data: [...]} wrappers (SheetDB / Apps Script)
    return Array.isArray(data) ? data : (data.data || []);
  } catch (err) {
    console.warn("Sheet fetch failed, using sample data.", err);
    return SAMPLE_PRODUCTS;
  }
}

// ══════════════════════════════════════════════════════════════
// RENDER GRID
// ══════════════════════════════════════════════════════════════
function renderGrid(products) {
  const grid = document.getElementById("productGrid");
  if (!grid) return;

  if (!products.length) {
    grid.innerHTML = `
      <div class="empty-state">
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="30" stroke="#2eac1e" stroke-width="2"/>
          <path d="M20 44 L44 20M20 20 L44 44" stroke="#2eac1e" stroke-width="2" stroke-linecap="round"/>
        </svg>
        <p>No products found in this category.</p>
      </div>`;
    return;
  }

  grid.innerHTML = products.map((p, i) => `
    <div class="product-card" style="animation-delay:${i * 0.07}s">
      <div class="card-image-wrap">
        <img src="${p.image || 'https://via.placeholder.com/300x300/f9faf8/2eac1e?text=Product'}"
             alt="${p.name}" loading="lazy"
             onerror="this.src='https://via.placeholder.com/300x300/f9faf8/2eac1e?text=No+Image'">
      </div>
      <div class="card-body">
        <div class="card-name">${p.name}</div>
        <div class="card-desc">${p.shortDescription || ''}</div>
      </div>
      <div class="card-footer">
        <a class="btn-view" href="productdetails.html?id=${encodeURIComponent(p.id)}">View Product</a>
      </div>
    </div>
  `).join('');
}

// ══════════════════════════════════════════════════════════════
// FILTER
// ══════════════════════════════════════════════════════════════
function applyFilter(category) {
  activeCategory = category;
  const filtered = category === "All"
    ? allProducts
    : allProducts.filter(p => p.category && p.category.trim() === category);
  renderGrid(filtered);

  // Update active button
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.cat === category);
  });
}

// ══════════════════════════════════════════════════════════════
// INIT — INDEX PAGE
// ══════════════════════════════════════════════════════════════
async function initIndex() {
  const grid = document.getElementById("productGrid");
  if (!grid) return;

  // Show loader
  grid.innerHTML = `<div class="loading-state"><div class="spinner"></div><p>Loading products…</p></div>`;

  allProducts = await fetchProducts();

  // Wire filter buttons
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => applyFilter(btn.dataset.cat));
  });

  applyFilter("All");
}

// ══════════════════════════════════════════════════════════════
// INIT — DETAIL PAGE
// ══════════════════════════════════════════════════════════════
async function initDetail() {
  const container = document.getElementById("detailContent");
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  if (!id) {
    container.innerHTML = `<p style="text-align:center;color:#e53935;padding:40px">Product ID missing.</p>`;
    return;
  }

  container.innerHTML = `<div class="loading-state"><div class="spinner"></div><p>Loading product…</p></div>`;

  const products = await fetchProducts();
  const product = products.find(p => String(p.id) === String(id));

  if (!product) {
    container.innerHTML = `<p style="text-align:center;color:#e53935;padding:40px">Product not found.</p>`;
    return;
  }

  container.innerHTML = `
    <div class="detail-card">
      <div class="detail-image-col">
        <img src="${product.image || 'https://via.placeholder.com/400x400/f9faf8/2eac1e?text=No+Image'}"
             alt="${product.name}"
             onerror="this.src='https://via.placeholder.com/400x400/f9faf8/2eac1e?text=No+Image'">
      </div>
      <div class="detail-info-col">
        <span class="detail-category">${product.category || 'General'}</span>
        <h1 class="detail-name">${product.name}</h1>
        <p class="detail-short">${product.shortDescription || ''}</p>
        <hr class="detail-divider">
        <div>
          <div class="detail-label">Description</div>
          <p class="detail-full">${product.fullDescription || product.shortDescription || 'No description available.'}</p>
        </div>
      </div>
    </div>`;
}

// ══════════════════════════════════════════════════════════════
// BOOT
// ══════════════════════════════════════════════════════════════
document.addEventListener("DOMContentLoaded", () => {
  initIndex();
  initDetail();
});


    // Trigger animations immediately on page load for the Hero
    window.addEventListener('DOMContentLoaded', () => {
        const hero = document.querySelector('.about-hero-section');
        setTimeout(() => {
            hero.classList.add('reveal-active');
        }, 100);
    });

    /* Intersection Observer to trigger the fade-up when scrolled into view */
    const trustObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.reveal-section').forEach(section => {
        trustObserver.observe(section);
    });


    // Parallax Scroll Effect for the Background Image
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.parallax-img');
        if (parallax) {
            parallax.style.transform = `translateY(${scrolled * 0.1}px)`;
        }
    });


    const form = document.getElementById("contactForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  const data = {
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  };

  try {
    const res = await fetch("https://script.google.com/macros/s/AKfycbxzyarzXfGGFcL69Q-ZjKXWdPUZ-3Y4KO_lHJ-9tczjiddn0mGHAtrvGq41TJRfJsltng/exec", {
      method: "POST",
      body: JSON.stringify(data),
    });

    alert("Message sent successfully");
    form.reset();
  } catch (error) {
    alert("Error sending message");
  }
});