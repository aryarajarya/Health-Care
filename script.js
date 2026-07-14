// ============== CUSTOM CURSOR ANIMATION ==============
const cursor = document.querySelector('.cursor');
const cursorShadow = document.querySelector('.cursor-shadow');
const cursorGlow = document.querySelector('.cursor-glow');

let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';

    cursorShadow.style.left = mouseX + 'px';
    cursorShadow.style.top = mouseY + 'px';

    cursorGlow.style.left = mouseX + 'px';
    cursorGlow.style.top = mouseY + 'px';
});

// Cursor interaction effects
document.addEventListener('mousedown', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
    cursorShadow.style.transform = 'translate(-50%, -50%) scale(1.3)';
});

document.addEventListener('mouseup', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    cursorShadow.style.transform = 'translate(-50%, -50%) scale(1)';
});

// ============== HEADER SCROLL EFFECT ==============
const header = document.getElementById('header');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    lastScrollTop = scrollTop;
});

// ============== NAVIGATION MENU ==============
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

function toggleMenu() {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
}

// Close menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// ============== SMOOTH SCROLLING ==============
function scrollTo(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    }
}

// ============== SCROLL REVEAL ANIMATIONS ==============
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
});

// ============== FORM SUBMISSION ==============
function handleSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value;

    if (name && email && phone && service && message) {
        alert(`Thank you, ${name}! 🎉\n\nYour appointment request has been received!\n\nWe will contact you at ${phone} within 24 hours.\n\nFor immediate assistance, call our helpline: +91-95XXXX-XXXX`);
        
        document.querySelector('.contact-form-container').reset();
    } else {
        alert('Please fill in all fields');
    }
}

// ============== RESPONSIVE NAVIGATION ==============
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    }
});

// ============== PAGE LOAD ANIMATION ==============
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// ============== SCROLL PADDING FOR FIXED HEADER ==============
document.documentElement.scrollPaddingTop = '80px';