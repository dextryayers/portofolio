# 🌟 Personal Portfolio Website

A modern, elegant, and fully responsive dark mode portfolio website built with Bootstrap 5 and custom animations.

## ✨ Features

### 🎨 Design
- **Dark Mode Theme**: Sleek dark background (#0f172a, #111827) with blue accents (#3b82f6, #60a5fa)
- **Modern Typography**: Inter for body text, Poppins for headings
- **Glassmorphism Effects**: Modern glass effects on navbar and cards
- **Gradient Accents**: Beautiful blue gradients throughout the design

### 📱 Fully Responsive
- Mobile-first approach
- Breakpoints: xs (<576px), sm (≥576px), md (≥768px), lg (≥992px), xl (≥1200px)
- Touch-friendly for mobile devices
- Hamburger menu with smooth animations

### 🚀 Sections

1. **Navbar**: Sticky navigation with glassmorphism effect and smooth scroll
2. **Hero Section**: Typing animation, CTA buttons, floating portrait image
3. **Journey Timeline**: 4 timeline entries (2022-2025) with modal details
4. **Gallery/Projects**: 9 projects in 3x3 grid with hover effects and modals
5. **Certificates**: Carousel with 7 certificates, auto-scroll every 5 seconds
6. **About Me**: Profile info, skills progress bars, social media links
7. **Footer**: Quick links, newsletter signup, copyright

### 🎭 Animations & Effects

- **Typing Animation**: Dynamic text in hero section
- **Floating Animation**: Smooth floating effect on images
- **Scroll Animations**: AOS (Animate On Scroll) library integration
- **Hover Effects**: Scale, glow, and elevation on interactive elements
- **Smooth Transitions**: Page-wide smooth scrolling and transitions
- **Loading Animation**: Beautiful loading screen on page load
- **Micro-interactions**: Button ripples, card hovers, and more

### 🛠️ Technologies Used

- **HTML5**: Semantic markup, SEO-friendly structure
- **CSS3**: Custom properties, Flexbox, Grid
- **Bootstrap 5.3.0**: Grid system, components, utilities
- **JavaScript ES6+**: Modern JS features and animations
- **AOS Library**: Scroll animations
- **Font Awesome 6.4.0**: Icons
- **Google Fonts**: Inter & Poppins

## 📂 File Structure

```
portof/
├── index.html              # Main HTML file
├── css/
│   ├── style.css          # Main styles (dark theme, components)
│   └── animations.css     # Animation library
├── js/
│   ├── main.js           # Main functionality
│   └── animations.js     # Custom animations
├── images/
│   ├── portrait-1.jpg    # Hero section portrait
│   ├── portrait-2.jpg    # About section portrait
│   ├── projects/         # Project images (9 images)
│   │   ├── project-1.jpg
│   │   ├── project-2.jpg
│   │   └── ...
│   └── certificates/     # Certificate images (7 images)
│       ├── cert-1.jpg
│       ├── cert-2.jpg
│       └── ...
└── README.md            # This file
```

## 🚀 Getting Started

### Prerequisites
No build tools required! This is a static website that runs directly in the browser.

### Installation

1. **Clone or download** this repository
2. **Add your images** to the appropriate directories:
   - Add your portrait photos to `images/`
   - Add project screenshots to `images/projects/`
   - Add certificate images to `images/certificates/`
3. **Customize content** in `index.html`:
   - Update personal information
   - Modify project details
   - Add your social media links
   - Update timeline entries
4. **Open** `index.html` in your browser

### Customization

#### Colors
Edit CSS variables in `css/style.css`:
```css
:root {
    --primary-dark: #0f172a;
    --blue-primary: #3b82f6;
    --blue-light: #60a5fa;
    /* ... */
}
```

#### Personal Information
Update in `index.html`:
- Name and titles
- About me description
- Social media links
- Project details
- Contact information

#### Typing Animation
Edit texts in `js/animations.js`:
```javascript
const texts = [
    "Hi, I'm Your Name",
    "Web Developer",
    "UI/UX Designer",
    "Creative Thinker"
];
```

## 📸 Adding Images

### Portrait Images
- **portrait-1.jpg**: 800x1000px (Hero section)
- **portrait-2.jpg**: 600x800px (About section)
- Format: JPG or WebP
- Recommended: Use high-quality images with good lighting

### Project Images
- **Size**: 800x600px
- **Format**: JPG or WebP
- **Naming**: project-1.jpg through project-9.jpg
- Location: `images/projects/`

### Certificates
- **Size**: 1200x800px (landscape)
- **Format**: JPG, PNG, or WebP
- **Naming**: cert-1.jpg through cert-7.jpg
- Location: `images/certificates/`

### Image Optimization Tips
1. Use WebP format with JPG fallback for better performance
2. Compress images before uploading (use TinyPNG or similar)
3. Use appropriate image dimensions
4. Add descriptive alt text for accessibility

## 🎨 Color Scheme

| Color | Hex | Usage |
|-------|-----|-------|
| Primary Dark | #0f172a | Background |
| Secondary Dark | #1e293b | Cards, sections |
| Blue Primary | #3b82f6 | Accents, buttons |
| Blue Light | #60a5fa | Hover states, text |
| Blue Dark | #1e40af | Gradients |
| Light Gray | #cbd5e1 | Body text |
| White | #ffffff | Headings |

## ⚡ Performance

- Lazy loading for images
- Debounced scroll events
- Optimized animations
- Minified CSS/JS (optional)
- Fast loading time (<2s on good connection)

## 🌐 Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Breakpoints

| Breakpoint | Width | Description |
|------------|-------|-------------|
| xs | <576px | Extra small devices |
| sm | ≥576px | Small devices |
| md | ≥768px | Medium devices (tablets) |
| lg | ≥992px | Large devices (desktops) |
| xl | ≥1200px | Extra large devices |

## 🔧 Optional Enhancements

Uncomment in respective files to enable:

### Custom Cursor (main.js)
```javascript
if (window.innerWidth > 768) {
    new CursorFollower();
}
```

### Floating Particles (animations.js)
```javascript
createFloatingElements();
```

### Wave Animation (animations.js)
```javascript
const heroSection = document.querySelector('.hero-section');
if (heroSection) {
    new WaveAnimation(heroSection);
}
```

### Mouse Trail (animations.js)
```javascript
if (window.innerWidth > 768) {
    new MouseTrail();
}
```

## 📝 To-Do

- [ ] Add your portrait images
- [ ] Update personal information
- [ ] Add project screenshots
- [ ] Upload certificate images
- [ ] Customize social media links
- [ ] Update CV/Resume file
- [ ] Test on multiple devices
- [ ] Optimize images
- [ ] Add your domain

## 🎯 SEO Optimization

- Semantic HTML5 structure
- Meta tags for description and keywords
- Alt text on all images
- Proper heading hierarchy (h1-h6)
- Fast loading performance
- Mobile-friendly design
- Structured data ready

## 📄 License

This project is free to use for personal and commercial purposes. Attribution appreciated but not required.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 💬 Support

If you have any questions or need help customizing your portfolio, feel free to reach out!

## 🙏 Credits

- **Bootstrap**: https://getbootstrap.com
- **Font Awesome**: https://fontawesome.com
- **AOS Library**: https://michalsnik.github.io/aos/
- **Google Fonts**: https://fonts.google.com

---

**Made with ❤️ and ☕**

Happy coding! 🚀
