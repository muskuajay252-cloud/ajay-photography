/* ==========================
   AJAY PHOTOGRAPHY
   LUXURY JAVASCRIPT
========================== */

/* Navbar Background Change */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 100) {

        navbar.style.background = "rgba(0,0,0,0.95)";
        navbar.style.boxShadow = "0 5px 25px rgba(212,175,55,0.15)";

    } else {

        navbar.style.background = "rgba(0,0,0,0.6)";
        navbar.style.boxShadow = "none";

    }

});

/* ==========================
   Smooth Active Navigation
========================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href").includes(current)
        ) {
            link.classList.add("active");
        }

    });

});

/* ==========================
   Reveal Animation
========================== */

const revealElements = document.querySelectorAll(
".about-content, .gallery-item, .service-card, .testimonial, .video-card, .contact-container"
);

function reveal() {

    revealElements.forEach((element) => {

        const windowHeight = window.innerHeight;
        const revealTop = element.getBoundingClientRect().top;
        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {

            element.classList.add("show");

        }

    });

}

window.addEventListener("scroll", reveal);
reveal();

/* ==========================
   Contact Form
========================== */

const form = document.querySelector(".contact-form");

if(form){

form.addEventListener("submit", (e) => {

    e.preventDefault();

    alert(
      "Thank you for contacting Ajay Photography! We will get back to you soon."
    );

    form.reset();

});

}

/* ==========================
   Gallery Hover Effect
========================== */

const galleryItems =
document.querySelectorAll(".gallery-item");

galleryItems.forEach(item => {

    item.addEventListener("mouseenter", () => {

        item.style.transform = "translateY(-8px)";

    });

    item.addEventListener("mouseleave", () => {

        item.style.transform = "translateY(0px)";

    });

});

/* ==========================
   Scroll To Top Button
========================== */

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.cssText = `
position:fixed;
bottom:100px;
right:25px;
width:50px;
height:50px;
border:none;
border-radius:50%;
background:#D4AF37;
color:#000;
font-size:22px;
cursor:pointer;
display:none;
z-index:999;
font-weight:bold;
box-shadow:0 0 20px rgba(212,175,55,.4);
`;

window.addEventListener("scroll", () => {

    if(window.scrollY > 500){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});

/* ==========================
   Loading Screen
========================== */

window.addEventListener("load", () => {

    const loader = document.createElement("div");

    loader.id = "loader";

    loader.innerHTML = `
    <div class="loader-text">
        AJAY PHOTOGRAPHY
    </div>
    `;

    document.body.appendChild(loader);

    loader.style.cssText = `
    position:fixed;
    inset:0;
    background:#000;
    display:flex;
    align-items:center;
    justify-content:center;
    z-index:99999;
    color:#D4AF37;
    font-size:2rem;
    font-family:Cinzel, serif;
    letter-spacing:3px;
    animation:fadeOut 1s ease forwards;
    animation-delay:.8s;
    `;

    const style = document.createElement("style");

    style.innerHTML = `
    @keyframes fadeOut{
        to{
            opacity:0;
            visibility:hidden;
        }
    }

    .show{
        opacity:1 !important;
        transform:translateY(0) !important;
    }

    .gallery-item,
    .service-card,
    .testimonial,
    .video-card,
    .about-content,
    .contact-container{
        opacity:0;
        transform:translateY(60px);
        transition:.8s ease;
    }

    nav ul li a.active{
        color:#D4AF37;
    }
    `;

    document.head.appendChild(style);

});