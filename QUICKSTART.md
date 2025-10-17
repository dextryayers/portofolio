# 🚀 Quick Start Guide

Get your portfolio up and running in 5 minutes!

## 📋 Checklist

- [ ] **Step 1**: Generate placeholder images
- [ ] **Step 2**: Customize personal information
- [ ] **Step 3**: Update social media links
- [ ] **Step 4**: Test the website
- [ ] **Step 5**: Deploy online

---

## Step 1: Generate Placeholder Images (5 minutes)

### Option A: Use the Image Generator
1. Open `create-placeholders.html` in your browser
2. Click "Download All" buttons for each section
3. Save images to their folders:
   ```
   images/
   ├── portrait-1.jpg       ← Download from generator
   ├── portrait-2.jpg       ← Download from generator
   ├── projects/
   │   ├── project-1.jpg    ← Download all 9 projects
   │   └── ...
   └── certificates/
       ├── cert-1.jpg       ← Download all 7 certificates
       └── ...
   ```

### Option B: Use Your Own Images
Skip the generator and add your own images directly to the folders above.

**Image Requirements:**
- **Portraits**: portrait-1.jpg (800x1000px), portrait-2.jpg (600x800px)
- **Projects**: 9 images, 800x600px, named project-1.jpg to project-9.jpg
- **Certificates**: 7 images, 1200x800px, named cert-1.jpg to cert-7.jpg

---

## Step 2: Customize Personal Information (10 minutes)

Open `index.html` and find these sections to edit:

### 🏷️ Navbar Logo
```html
<!-- Line ~42 -->
<span class="logo-initial">AN</span>
```
Change "AN" to your initials.

### 👤 Hero Section
```html
<!-- Line ~64 onwards -->
<h1 class="hero-title">
    <span class="typing-text"></span>
```
The typing text is controlled in `js/animations.js` (line ~25):
```javascript
const texts = [
    "Hi, I'm Your Name",    ← Change this
    "Web Developer",         ← Change this
    "UI/UX Designer",        ← Change this
    "Creative Thinker"       ← Change this
];
```

### 📝 About Me Section
```html
<!-- Search for "About Me" section -->
<h3 class="about-title">Web Developer & UI/UX Designer</h3>
<p class="about-text">
    Hello! I'm a passionate web developer...
```
Replace with your own bio and description.

### 📧 Contact Information
```html
<!-- Search for "contact-info" class -->
<p>your@email.com</p>      ← Change email
<p>+62 123 4567 8900</p>   ← Change phone
<p>Jakarta, Indonesia</p>   ← Change location
```

---

## Step 3: Update Social Media Links (3 minutes)

Find and replace these URLs throughout `index.html`:

```html
<!-- About Section - Social Icons -->
<a href="https://github.com" target="_blank">              ← Your GitHub
<a href="https://linkedin.com" target="_blank">            ← Your LinkedIn
<a href="https://instagram.com" target="_blank">           ← Your Instagram
<a href="mailto:your@email.com">                           ← Your Email
<a href="https://twitter.com" target="_blank">             ← Your Twitter

<!-- Footer Section - Same links -->
```

**Quick Find & Replace:**
- `https://github.com` → Your GitHub URL
- `https://linkedin.com` → Your LinkedIn URL
- `https://instagram.com` → Your Instagram URL
- `your@email.com` → Your actual email
- `https://twitter.com` → Your Twitter URL

---

## Step 4: Customize Projects & Timeline (15 minutes)

### Projects
For each project (9 total), update:
```html
<div class="project-content">
    <h4>E-Commerce Platform</h4>              ← Project name
    <p>Modern shopping experience...</p>       ← Short description
</div>

<!-- And in the modal -->
<div class="modal fade" id="project1">
    <h5>E-Commerce Platform</h5>              ← Project name
    <p>A full-featured e-commerce...</p>       ← Full description
    <span class="badge">React</span>          ← Technologies used
    <a href="#" class="btn">Live Demo</a>     ← Project links
</div>
```

### Timeline Entries
Update your journey (4 entries: 2022-2025):
```html
<h3 class="timeline-title">Started Web Development Journey</h3>
<p class="timeline-desc">Began learning HTML, CSS...</p>
<!-- Update for each year -->
```

---

## Step 5: Test Your Website (2 minutes)

### Local Testing
1. Open `index.html` in your browser
2. Check all sections scroll smoothly
3. Test all modals (projects, journey, certificates)
4. Test mobile view (Chrome DevTools → Toggle Device Toolbar)
5. Verify all links work

### What to Check:
- ✅ All images load correctly
- ✅ Animations work smoothly
- ✅ Navigation links scroll to correct sections
- ✅ Modals open and close properly
- ✅ Forms display correctly
- ✅ Mobile menu works on small screens
- ✅ Social media links go to correct profiles

---

## Step 6: Deploy Online (Optional)

### Free Hosting Options:

#### **GitHub Pages** (Recommended)
1. Create a GitHub repository
2. Upload all files
3. Go to Settings → Pages
4. Select main branch
5. Your site will be live at: `username.github.io/repo-name`

#### **Netlify**
1. Visit netlify.com
2. Drag & drop your project folder
3. Site is live in seconds!
4. Custom domain available

#### **Vercel**
1. Visit vercel.com
2. Import from GitHub or upload files
3. Deploy with one click
4. Free SSL included

---

## 🎨 Customization Tips

### Change Colors
Edit `css/style.css` (lines 5-15):
```css
:root {
    --primary-dark: #0f172a;      ← Main background
    --blue-primary: #3b82f6;      ← Accent color
    --blue-light: #60a5fa;        ← Light accent
    /* Change these to your preferred colors */
}
```

### Change Fonts
Edit Google Fonts link in `index.html` (line ~26):
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700;800&display=swap">
```

Then update CSS variables:
```css
--font-primary: 'Inter', sans-serif;
--font-heading: 'Poppins', sans-serif;
```

### Add/Remove Projects
- **Add Projects**: Copy a project card and modal, change IDs
- **Remove Projects**: Delete the card HTML and corresponding modal

### Modify Timeline Years
- Add more years by copying a timeline-item div
- Update year badges and content

---

## 🐛 Troubleshooting

### Images Not Showing?
- Check file paths match exactly: `images/portrait-1.jpg`
- Verify images are in correct folders
- Check file extensions (jpg vs jpeg vs png)
- Open browser console (F12) for error messages

### Animations Not Working?
- Ensure all JS files are loaded (check browser console)
- Verify AOS library is loading from CDN
- Clear browser cache and reload (Ctrl+Shift+R)

### Mobile Menu Not Working?
- Check Bootstrap JS is loaded
- Verify navbar HTML structure is intact
- Test in multiple browsers

### Modals Not Opening?
- Check modal IDs match button `data-bs-target`
- Ensure Bootstrap JS is loaded
- Verify no JavaScript errors in console

---

## 📱 Contact & Support

Need help? Check these resources:
- Bootstrap Docs: https://getbootstrap.com/docs/
- Font Awesome: https://fontawesome.com/icons
- AOS Library: https://michalsnik.github.io/aos/

---

## ✨ Final Checklist

Before going live, make sure:

- [ ] All placeholder images replaced with real images
- [ ] Personal information updated everywhere
- [ ] All social media links working
- [ ] Projects showcase your actual work
- [ ] Timeline reflects your real journey
- [ ] Contact information is correct
- [ ] Tested on desktop and mobile
- [ ] All links open in new tabs where appropriate
- [ ] Page loads fast (under 3 seconds)
- [ ] No console errors in browser

---

**Congratulations! Your portfolio is ready! 🎉**

Now share it with the world and start getting noticed! 🚀
