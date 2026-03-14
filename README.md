# 🚀 Modern Personal Portfolio

A stunning, modern personal portfolio website with dark mode as default, featuring smooth animations, responsive design, and cyberpunk-inspired neon styling.

## ✨ Features

### Design & UI
- **Dark Mode First**: Beautiful dark theme enabled by default with light mode toggle
- **Modern Aesthetics**: Clean, minimal design inspired by Dribbble and Awwwards
- **Neon Cyberpunk Style**: Glowing neon ring animation around profile image
- **Smooth Animations**: Elegant transitions and scroll animations throughout
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices

### Interactive Elements
- **Typing Animation**: Rotating typing effect through multiple professional titles
- **Theme Toggle**: Seamless dark/light mode switching
- **Smooth Scrolling**: Fluid navigation between sections
- **Scroll Animations**: Elements reveal beautifully as you scroll
- **Hover Effects**: Interactive skill cards with smooth transitions
- **Active Navigation**: Dynamic nav links that highlight based on scroll position

### Sections
1. **Hero** - Animated greeting with typing text and neon-glowing profile image
2. **About** - Professional biography with elegant typography
3. **Skills** - Beautiful skill cards with icons and descriptions
4. **Contact** - Contact information and social media links

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with animations and gradients
  - Grid & Flexbox for layout
  - Custom properties for theming
  - Smooth transitions and blur effects
- **JavaScript (ES6+)** - Interactive functionality
  - Typing animation
  - Theme toggle with localStorage
  - Scroll animations with IntersectionObserver
  - Smooth navigation
- **Google Fonts** - Poppins (UI), Fira Code (typing)
- **Font Awesome 6.4** - Icon library

## 📁 File Structure

```
Portfolio/
├── index.html              # Main HTML file
├── css/
│   └── style.css           # All styles (dark mode first)
├── js/
│   └── script.js           # JavaScript functionality
├── images/
│   └── profile.jpg         # Your profile image
└── README.md               # This file
```

## 🚀 Getting Started

1. **Clone/Download** the portfolio files
2. **Add Your Profile Image**: Place your profile image as `images/profile.jpg`
3. **Customize Content**: Edit the text, links, and contact info in `index.html`
4. **Open in Browser**: Simply open `index.html` in any modern web browser
5. **Deploy**: Upload to GitHub Pages, Vercel, Netlify, or any web hosting service

## 📝 Customization Guide

### Update Personal Information (index.html)

```html
<!-- Update your name -->
<h1 class="hero-greeting">Hey there! I'm <span class="gradient-text">Your Name</span></h1>

<!-- Update contact email -->
<a href="mailto:your-email@example.com">your-email@example.com</a>

<!-- Update social links -->
<a href="https://github.com/your-username">
```

### Modify Typing Animation (script.js)

```javascript
const titles = [
    'Your First Title',
    'Your Second Title',
    'Your Third Title',
    // Add more titles...
];
```

### Change Colors

In `css/style.css`, modify the CSS custom properties:

```css
:root {
    --accent-primary: #00d4ff;      /* Cyan */
    --accent-secondary: #00f7ab;    /* Neon Green */
    --accent-tertiary: #ff006e;     /* Hot Pink */
    /* ... other colors ... */
}
```

## 🎨 Color Palette

### Dark Mode (Default)
- **Primary BG**: `#0a0e27` (Deep Navy)
- **Secondary BG**: `#1a1f3a` (Dark Purple-Blue)
- **Accent Primary**: `#00d4ff` (Cyan)
- **Accent Secondary**: `#00f7ab` (Neon Green)
- **Text Primary**: `#f0f1f5` (Off-White)

### Light Mode
- **Primary BG**: `#fafbfc` (Off-White)
- **Secondary BG**: `#f0f2f7` (Light Gray)
- **Accent Primary**: `#0088cc` (Blue)
- **Accent Secondary**: `#00b368` (Green)
- **Text Primary**: `#0a0e27` (Dark Navy)

## 🔧 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: < 480px

## ✅ Key Features Implemented

✅ Dark mode as default
✅ Light/dark theme toggle
✅ Typing animation with 7 rotating titles
✅ Neon glowing rotating ring around profile
✅ Smooth scrolling navigation
✅ Animated skill cards
✅ Contact information with links
✅ Social media icons (GitHub, LinkedIn)
✅ Scroll animations
✅ Fully responsive design
✅ Clean, readable code with comments
✅ SEO friendly HTML
✅ Performance optimized

## 💡 Tips for Best Results

1. **Profile Image**: Use a high-quality, professional headshot (dimensions: 300x300px minimum)
2. **Mobile Testing**: Test on actual mobile devices for best experience
3. **Browser Testing**: Check in multiple browsers for compatibility
4. **Update Meta Tags**: Customize the title and description in index.html
5. **Social Links**: Replace placeholder links with your actual profiles

---

**Made with ❤️ for tech enthusiasts and developers**