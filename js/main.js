// ===================================
// LOADING SCREEN
// ===================================

window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loading-screen');
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        // Initialize AOS after loading
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100,
            easing: 'ease-out'
        });
    }, 1500);
});

// ===================================
// NAVBAR SCROLL EFFECT
// ===================================

window.addEventListener('scroll', function() {
    const navbar = document.getElementById('mainNavbar');
    const backToTop = document.getElementById('backToTop');
    
    // Navbar scroll effect
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Back to top button
    if (window.scrollY > 300) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

// ===================================
// SMOOTH SCROLL FOR NAVIGATION
// ===================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Skip if it's a modal or other special link
        if (href === '#' || this.getAttribute('data-bs-toggle')) {
            return;
        }
        
        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                bsCollapse.hide();
            }
        }
    });
});

// ===================================
// ACTIVE NAVIGATION LINK
// ===================================

window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===================================
// BACK TO TOP BUTTON
// ===================================

document.getElementById('backToTop').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===================================
// CERTIFICATE ZOOM FUNCTIONALITY
// ===================================

document.querySelectorAll('.certificate-card').forEach(card => {
    card.addEventListener('click', function() {
        const imgSrc = this.querySelector('img').src;
        const modal = new bootstrap.Modal(document.getElementById('certificateZoom'));
        document.getElementById('zoomedCertificate').src = imgSrc;
        modal.show();
    });
});

// ===================================
// CERTIFICATE CAROUSEL AUTO-PLAY
// ===================================

// Initialize certificate carousel with autoplay
function initCertificateCarousel() {
    const certificateCarouselElement = document.querySelector('#certificateCarousel');
    if (certificateCarouselElement) {
        const carousel = new bootstrap.Carousel(certificateCarouselElement, {
            interval: 3500, // 3.5 seconds per slide
            ride: 'carousel',
            wrap: true, // Loop back to first slide
            touch: true, // Enable touch swipe
            pause: 'hover' // Pause on hover
        });
        
        // Start carousel automatically
        carousel.cycle();
        
        console.log('Certificate carousel initialized with autoplay');
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCertificateCarousel);
} else {
    initCertificateCarousel();
}

// ===================================
// CONTACT FORM SUBMISSION
// ===================================

const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        
        // Show success message (you can customize this)
        alert('Thank you for your message! I will get back to you soon.');
        
        // Reset form
        this.reset();
        
        // Here you would typically send the form data to a server
        // Example: fetch('/send-email', { method: 'POST', body: formData })
    });
}

// ===================================
// NEWSLETTER FORM SUBMISSION
// ===================================

const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = this.querySelector('input[type="email"]').value;
        
        if (email) {
            alert('Thank you for subscribing to my newsletter!');
            this.reset();
        }
    });
}

// ===================================
// SKILLS PROGRESS BAR ANIMATION
// ===================================

function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const targetWidth = progressBar.style.width;
                progressBar.style.width = '0%';
                
                setTimeout(() => {
                    progressBar.style.width = targetWidth;
                }, 100);
                
                observer.unobserve(progressBar);
            }
        });
    }, { threshold: 0.5 });
    
    progressBars.forEach(bar => observer.observe(bar));
}

// Initialize progress bar animation
animateProgressBars();

// ===================================
// PARALLAX EFFECT FOR IMAGES
// ===================================

window.addEventListener('scroll', function() {
    const parallaxElements = document.querySelectorAll('.parallax');
    
    parallaxElements.forEach(element => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.3;
        element.style.transform = `translate3d(0, ${rate}px, 0)`;
    });
});

// ===================================
// ADD HOVER EFFECTS TO CARDS
// ===================================

document.querySelectorAll('.project-card, .timeline-card, .certificate-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ===================================
// LAZY LOADING FOR IMAGES
// ===================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===================================
// GENERATE PLACEHOLDER IMAGES
// ===================================

function generatePlaceholder(element, width, height, text) {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    
    // Gradient background
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#3b82f6');
    gradient.addColorStop(1, '#1e40af');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
    
    // Text
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 24px Inter';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, width / 2, height / 2);
    
    element.src = canvas.toDataURL();
}

// Generate placeholders for images that don't exist
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('error', function() {
            const width = this.width || 800;
            const height = this.height || 600;
            const text = this.alt || 'Image';
            generatePlaceholder(this, width, height, text);
        });
    });
});

// ===================================
// MODAL ANIMATIONS
// ===================================

document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('show.bs.modal', function() {
        this.querySelector('.modal-dialog').style.animation = 'modal-slide-up 0.4s ease-out';
    });
});

// ===================================
// RIPPLE EFFECT ON BUTTONS
// ===================================

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple-effect');
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// ===================================
// REVEAL ELEMENTS ON SCROLL
// ===================================

function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Initial check

// ===================================
// CURSOR TRAIL EFFECT (Optional)
// ===================================

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll('.cursor-circle');

if (circles.length > 0) {
    circles.forEach(function(circle) {
        circle.x = 0;
        circle.y = 0;
    });
    
    window.addEventListener('mousemove', function(e) {
        coords.x = e.clientX;
        coords.y = e.clientY;
    });
    
    function animateCircles() {
        let x = coords.x;
        let y = coords.y;
        
        circles.forEach(function(circle, index) {
            circle.style.left = x - 12 + 'px';
            circle.style.top = y - 12 + 'px';
            circle.style.transform = `scale(${(circles.length - index) / circles.length})`;
            
            circle.x = x;
            circle.y = y;
            
            const nextCircle = circles[index + 1] || circles[0];
            x += (nextCircle.x - x) * 0.3;
            y += (nextCircle.y - y) * 0.3;
        });
        
        requestAnimationFrame(animateCircles);
    }
    
    animateCircles();
}

// ===================================
// DARK MODE TOGGLE (Optional Enhancement)
// ===================================

function initDarkMode() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function() {
            document.body.classList.toggle('light-mode');
            const isLightMode = document.body.classList.contains('light-mode');
            localStorage.setItem('lightMode', isLightMode);
        });
        
        // Check saved preference
        if (localStorage.getItem('lightMode') === 'true') {
            document.body.classList.add('light-mode');
        }
    }
}

initDarkMode();

// ===================================
// PERFORMANCE OPTIMIZATION
// ===================================

// Debounce function for scroll events
function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Apply debounce to scroll events
const debouncedScroll = debounce(function() {
    revealOnScroll();
});

window.addEventListener('scroll', debouncedScroll);

// ===================================
// MOTIVATIONAL QUOTES
// ===================================

const motivationalQuotes = [
    "Kesuksesan adalah hasil dari persiapan, kerja keras, dan belajar dari kegagalan.",
    "Jangan menunggu kesempatan, ciptakanlah kesempatan itu sendiri.",
    "Mimpi besar dimulai dari langkah kecil yang konsisten.",
    "Kegagalan adalah kesempatan untuk memulai lagi dengan lebih cerdas.",
    "Kamu tidak perlu menjadi hebat untuk memulai, tapi kamu harus memulai untuk menjadi hebat.",
    "Setiap expert pernah menjadi pemula. Jangan menyerah!",
    "Coding bukan hanya tentang menulis kode, tapi tentang memecahkan masalah.",
    "Kesalahan adalah bukti bahwa kamu sedang mencoba.",
    "Investasi terbaik adalah investasi pada diri sendiri.",
    "Tidak ada yang mustahil jika kamu berani mencoba.",
    "Belajar coding adalah maraton, bukan sprint. Tetap semangat!",
    "Hari ini sulit, besok akan lebih sulit, tapi lusa akan cerah.",
    "Jangan bandingkan prosesmu dengan orang lain. Setiap orang punya jalannya sendiri.",
    "Bug adalah guru terbaikmu dalam coding.",
    "Fokus pada progress, bukan kesempurnaan.",
    "Ketika kamu merasa ingin menyerah, ingatlah kenapa kamu memulai.",
    "Programmer hebat bukan yang tidak pernah error, tapi yang pandai menyelesaikannya.",
    "Masa depan milik mereka yang percaya pada keindahan mimpi mereka.",
    "Belajar dari kemarin, hidup untuk hari ini, berharap untuk besok.",
    "Keyakinan adalah langkah pertama meskipun kamu tidak melihat seluruh tangga.",
    "Jangan takut gagal, takutlah untuk tidak mencoba.",
    "Setiap kode yang kamu tulis adalah langkah menuju kesuksesanmu.",
    "Kreativitas adalah intelegensi yang sedang bersenang-senang.",
    "Kunci sukses adalah fokus pada tujuan, bukan hambatan."
];

let lastQuoteIndex = -1;

// Make functions available globally for inline onclick handlers
window.getRandomMotivation = function() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
    } while (randomIndex === lastQuoteIndex && motivationalQuotes.length > 1);
    
    lastQuoteIndex = randomIndex;
    return motivationalQuotes[randomIndex];
}

window.showMotivation = function() {
    const motivationText = document.getElementById('motivationText');
    if (motivationText) {
        motivationText.textContent = window.getRandomMotivation();
        const modalElement = document.getElementById('motivationModal');
        if (modalElement) {
            const modal = new bootstrap.Modal(modalElement);
            modal.show();
        }
    }
}

window.changeMotivation = function() {
    const motivationText = document.getElementById('motivationText');
    if (motivationText) {
        motivationText.style.opacity = '0';
        setTimeout(() => {
            motivationText.textContent = window.getRandomMotivation();
            motivationText.style.opacity = '1';
        }, 200);
    }
}

// Initialize motivation button immediately when script loads
(function initMotivationButton() {
    function attachListeners() {
        const motivationBtn = document.getElementById('motivationBtn');
        const nextMotivationBtn = document.getElementById('nextMotivationBtn');
        
        if (motivationBtn) {
            motivationBtn.onclick = function(e) {
                e.preventDefault();
                showMotivation();
            };
            console.log('Motivation button initialized');
        }
        
        if (nextMotivationBtn) {
            nextMotivationBtn.onclick = function(e) {
                e.preventDefault();
                changeMotivation();
            };
        }
    }
    
    // Try to attach immediately
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', attachListeners);
    } else {
        attachListeners();
    }
    
    // Also attach on window load as backup
    window.addEventListener('load', attachListeners);
})();

// ===================================
// CONSOLE MESSAGE
// ===================================

console.log('%c👋 Welcome to My Portfolio!', 'color: #3b82f6; font-size: 24px; font-weight: bold;');
console.log('%cBuilt with ❤️ using Bootstrap 5, AOS, and custom animations', 'color: #60a5fa; font-size: 14px;');
console.log('%cInterested in the code? Check out my GitHub!', 'color: #cbd5e1; font-size: 12px;');

// ===================================
// PREVENT RIGHT CLICK (Optional)
// ===================================

// Uncomment if you want to prevent right-click on images
/*
document.addEventListener('contextmenu', function(e) {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
        return false;
    }
});
*/

// ===================================
// KEYBOARD NAVIGATION
// ===================================

document.addEventListener('keydown', function(e) {
    // Press 'Escape' to close modals
    if (e.key === 'Escape') {
        const modals = document.querySelectorAll('.modal.show');
        modals.forEach(modal => {
            const bsModal = bootstrap.Modal.getInstance(modal);
            if (bsModal) bsModal.hide();
        });
    }
    
    // Press 'Home' to scroll to top
    if (e.key === 'Home' && e.ctrlKey) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});

// ===================================
// INITIALIZE ALL TOOLTIPS
// ===================================

const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
const tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});

// ===================================
// LOG PERFORMANCE METRICS
// ===================================

window.addEventListener('load', function() {
    if ('performance' in window) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`%cPage Load Time: ${pageLoadTime}ms`, 'color: #3b82f6; font-weight: bold;');
    }
});
