// ===================================
// TYPING ANIMATION FOR HERO SECTION
// ===================================

class TypeWriter {
    constructor(element, texts, speed = 100, deleteSpeed = 50, pauseTime = 2000) {
        this.element = element;
        this.texts = texts;
        this.speed = speed;
        this.deleteSpeed = deleteSpeed;
        this.pauseTime = pauseTime;
        this.textIndex = 0;
        this.charIndex = 0;
        this.isDeleting = false;
        this.type();
    }
    
    type() {
        const currentText = this.texts[this.textIndex];
        
        if (this.isDeleting) {
            this.element.textContent = currentText.substring(0, this.charIndex - 1);
            this.charIndex--;
        } else {
            this.element.textContent = currentText.substring(0, this.charIndex + 1);
            this.charIndex++;
        }
        
        let typeSpeed = this.isDeleting ? this.deleteSpeed : this.speed;
        
        if (!this.isDeleting && this.charIndex === currentText.length) {
            typeSpeed = this.pauseTime;
            this.isDeleting = true;
        } else if (this.isDeleting && this.charIndex === 0) {
            this.isDeleting = false;
            this.textIndex = (this.textIndex + 1) % this.texts.length;
            typeSpeed = 500;
        }
        
        setTimeout(() => this.type(), typeSpeed);
    }
}

// Initialize typing animation
document.addEventListener('DOMContentLoaded', function() {
    const typingElement = document.querySelector('.typing-text');
    
    if (typingElement) {
        const texts = [
            "Hi, I'm Hanif Abdurrohim",
            "Web Developer",
            "UI/UX Designer",
            "Penetrasi Tester"
        ];
        
        new TypeWriter(typingElement, texts, 100, 50, 2000);
    }
});

// ===================================
// FLOATING ANIMATION ENHANCEMENTS
// ===================================

function createFloatingElements() {
    const hero = document.querySelector('.hero-section');
    
    if (!hero) return;
    
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        hero.appendChild(particle);
    }
}

// Uncomment to enable floating particles
// createFloatingElements();

// ===================================
// SCROLL-TRIGGERED ANIMATIONS
// ===================================

class ScrollAnimations {
    constructor() {
        this.elements = document.querySelectorAll('[data-scroll-animation]');
        this.init();
    }
    
    init() {
        if (this.elements.length === 0) return;
        
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const animation = entry.target.dataset.scrollAnimation;
                        entry.target.classList.add(animation);
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );
        
        this.elements.forEach(element => observer.observe(element));
    }
}

// Initialize scroll animations
new ScrollAnimations();

// ===================================
// COUNTER ANIMATION
// ===================================

class CounterAnimation {
    constructor(element, target, duration = 2000) {
        this.element = element;
        this.target = target;
        this.duration = duration;
        this.start = 0;
        this.increment = target / (duration / 16);
    }
    
    animate() {
        this.start += this.increment;
        
        if (this.start < this.target) {
            this.element.textContent = Math.floor(this.start);
            requestAnimationFrame(() => this.animate());
        } else {
            this.element.textContent = this.target;
        }
    }
    
    observe() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animate();
                    observer.unobserve(this.element);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(this.element);
    }
}

// Initialize counters
document.querySelectorAll('[data-counter]').forEach(counter => {
    const target = parseInt(counter.dataset.counter);
    const animation = new CounterAnimation(counter, target);
    animation.observe();
});

// ===================================
// CURSOR FOLLOW EFFECT
// ===================================

class CursorFollower {
    constructor() {
        this.cursor = document.createElement('div');
        this.cursor.className = 'custom-cursor';
        this.cursorDot = document.createElement('div');
        this.cursorDot.className = 'cursor-dot';
        
        document.body.appendChild(this.cursor);
        document.body.appendChild(this.cursorDot);
        
        this.init();
    }
    
    init() {
        document.addEventListener('mousemove', (e) => {
            this.cursor.style.left = e.clientX + 'px';
            this.cursor.style.top = e.clientY + 'px';
            this.cursorDot.style.left = e.clientX + 'px';
            this.cursorDot.style.top = e.clientY + 'px';
        });
        
        // Hover effects on interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .project-card, .certificate-card');
        
        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                this.cursor.classList.add('cursor-hover');
            });
            
            element.addEventListener('mouseleave', () => {
                this.cursor.classList.remove('cursor-hover');
            });
        });
    }
}

// Uncomment to enable custom cursor
// if (window.innerWidth > 768) {
//     new CursorFollower();
// }

// ===================================
// PARALLAX SCROLL EFFECT
// ===================================

class ParallaxScroll {
    constructor() {
        this.elements = document.querySelectorAll('[data-parallax]');
        this.init();
    }
    
    init() {
        if (this.elements.length === 0) return;
        
        window.addEventListener('scroll', () => {
            this.elements.forEach(element => {
                const speed = element.dataset.parallax || 0.5;
                const yPos = -(window.pageYOffset * speed);
                element.style.transform = `translateY(${yPos}px)`;
            });
        });
    }
}

new ParallaxScroll();

// ===================================
// TEXT REVEAL ANIMATION
// ===================================

class TextReveal {
    constructor(element) {
        this.element = element;
        this.text = element.textContent;
        this.element.textContent = '';
        this.chars = this.text.split('');
        this.init();
    }
    
    init() {
        this.chars.forEach((char, index) => {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char;
            span.style.opacity = '0';
            span.style.transform = 'translateY(20px)';
            span.style.display = 'inline-block';
            span.style.transition = `all 0.3s ease ${index * 0.03}s`;
            this.element.appendChild(span);
        });
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.reveal();
                    observer.unobserve(this.element);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(this.element);
    }
    
    reveal() {
        const spans = this.element.querySelectorAll('span');
        spans.forEach(span => {
            span.style.opacity = '1';
            span.style.transform = 'translateY(0)';
        });
    }
}

// Apply text reveal to section titles
document.querySelectorAll('.section-title').forEach(title => {
    // Uncomment to enable text reveal
    // new TextReveal(title);
});

// ===================================
// MAGNETIC BUTTON EFFECT
// ===================================

class MagneticButton {
    constructor(element) {
        this.element = element;
        this.init();
    }
    
    init() {
        this.element.addEventListener('mousemove', (e) => {
            const rect = this.element.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            this.element.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        });
        
        this.element.addEventListener('mouseleave', () => {
            this.element.style.transform = 'translate(0, 0)';
        });
    }
}

// Apply magnetic effect to buttons
document.querySelectorAll('.btn-glow').forEach(button => {
    new MagneticButton(button);
});

// ===================================
// IMAGE TILT EFFECT
// ===================================

class TiltEffect {
    constructor(element, maxTilt = 15) {
        this.element = element;
        this.maxTilt = maxTilt;
        this.init();
    }
    
    init() {
        this.element.addEventListener('mousemove', (e) => {
            const rect = this.element.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((y - centerY) / centerY) * this.maxTilt;
            const rotateY = ((centerX - x) / centerX) * this.maxTilt;
            
            this.element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        });
        
        this.element.addEventListener('mouseleave', () => {
            this.element.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    }
}

// Apply tilt effect to project cards
document.querySelectorAll('.project-card').forEach(card => {
    new TiltEffect(card, 10);
});

// ===================================
// WAVE ANIMATION FOR BACKGROUNDS
// ===================================

class WaveAnimation {
    constructor(container) {
        this.container = container;
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.waves = [];
        this.init();
    }
    
    init() {
        this.canvas.style.position = 'absolute';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.pointerEvents = 'none';
        this.canvas.style.opacity = '0.1';
        
        this.container.style.position = 'relative';
        this.container.insertBefore(this.canvas, this.container.firstChild);
        
        this.resize();
        window.addEventListener('resize', () => this.resize());
        
        // Create waves
        for (let i = 0; i < 3; i++) {
            this.waves.push({
                y: this.canvas.height / 2,
                length: 0.01 + (i * 0.002),
                amplitude: 50 + (i * 20),
                frequency: 0.01 + (i * 0.002),
                phase: i * Math.PI / 3
            });
        }
        
        this.animate();
    }
    
    resize() {
        this.canvas.width = this.container.offsetWidth;
        this.canvas.height = this.container.offsetHeight;
    }
    
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.waves.forEach((wave, index) => {
            this.ctx.beginPath();
            this.ctx.strokeStyle = `rgba(59, 130, 246, ${0.3 - index * 0.1})`;
            this.ctx.lineWidth = 2;
            
            for (let x = 0; x < this.canvas.width; x++) {
                const y = wave.y + Math.sin(x * wave.length + wave.phase) * wave.amplitude;
                
                if (x === 0) {
                    this.ctx.moveTo(x, y);
                } else {
                    this.ctx.lineTo(x, y);
                }
            }
            
            this.ctx.stroke();
            wave.phase += wave.frequency;
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

// Uncomment to enable wave animation
// const heroSection = document.querySelector('.hero-section');
// if (heroSection) {
//     new WaveAnimation(heroSection);
// }

// ===================================
// STAGGER ANIMATION FOR LISTS
// ===================================

function staggerAnimation(elements, delay = 100) {
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            element.style.transition = 'all 0.5s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * delay);
    });
}

// Apply stagger animation to timeline items
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.timeline-item');
            staggerAnimation(items, 200);
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

const timeline = document.querySelector('.timeline');
if (timeline) {
    observer.observe(timeline);
}

// ===================================
// SMOOTH REVEAL FOR IMAGES
// ===================================

class ImageReveal {
    constructor() {
        this.images = document.querySelectorAll('img');
        this.init();
    }
    
    init() {
        this.images.forEach(img => {
            img.style.opacity = '0';
            img.style.transform = 'scale(0.95)';
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        img.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                        img.style.opacity = '1';
                        img.style.transform = 'scale(1)';
                        observer.unobserve(img);
                    }
                });
            }, { threshold: 0.1 });
            
            observer.observe(img);
        });
    }
}

// Initialize image reveal
setTimeout(() => {
    new ImageReveal();
}, 100);

// ===================================
// MOUSE TRAIL EFFECT
// ===================================

class MouseTrail {
    constructor() {
        this.trail = [];
        this.maxTrail = 20;
        this.init();
    }
    
    init() {
        document.addEventListener('mousemove', (e) => {
            this.addTrailPoint(e.clientX, e.clientY);
        });
        
        this.animate();
    }
    
    addTrailPoint(x, y) {
        const point = document.createElement('div');
        point.className = 'trail-point';
        point.style.left = x + 'px';
        point.style.top = y + 'px';
        document.body.appendChild(point);
        
        this.trail.push(point);
        
        if (this.trail.length > this.maxTrail) {
            const oldPoint = this.trail.shift();
            oldPoint.remove();
        }
        
        setTimeout(() => {
            point.style.opacity = '0';
            point.style.transform = 'scale(0)';
        }, 10);
        
        setTimeout(() => {
            point.remove();
        }, 500);
    }
    
    animate() {
        requestAnimationFrame(() => this.animate());
    }
}

// Uncomment to enable mouse trail
// if (window.innerWidth > 768) {
//     new MouseTrail();
// }

// ===================================
// PAGE TRANSITION EFFECT
// ===================================

function pageTransition() {
    const overlay = document.createElement('div');
    overlay.className = 'page-transition-overlay';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #3b82f6, #1e40af);
        z-index: 9999;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.3s ease;
    `;
    
    document.body.appendChild(overlay);
    
    document.querySelectorAll('a[href^="http"]').forEach(link => {
        link.addEventListener('click', (e) => {
            if (link.target !== '_blank') {
                e.preventDefault();
                overlay.style.opacity = '1';
                
                setTimeout(() => {
                    window.location.href = link.href;
                }, 300);
            }
        });
    });
}

// Uncomment to enable page transitions
// pageTransition();

// ===================================
// CONSOLE ART
// ===================================

console.log('%c  ', 'font-size: 1px; padding: 50px 100px; background: linear-gradient(135deg, #3b82f6, #1e40af);');
console.log('%c⚡ Powered by Bootstrap 5 & Custom Animations', 'color: #3b82f6; font-size: 16px; font-weight: bold;');
