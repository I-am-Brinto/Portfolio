// ================================================
// MODERN PORTFOLIO JAVASCRIPT
// ================================================

// ================================================
// THEME TOGGLE FUNCTIONALITY
// ================================================

const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;
const bodyElement = document.body;

// Check for saved theme preference or default to dark mode
const savedTheme = localStorage.getItem('theme') || 'dark';
setTheme(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = bodyElement.classList.contains('dark-theme') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
});

function setTheme(theme) {
    if (theme === 'dark') {
        bodyElement.classList.remove('light-theme');
        bodyElement.classList.add('dark-theme');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        bodyElement.classList.remove('dark-theme');
        bodyElement.classList.add('light-theme');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
    localStorage.setItem('theme', theme);
}

// ================================================
// TYPING ANIMATION
// ================================================

const typingOutput = document.getElementById('typing-output');

const titles = [
    'Flutter App Developer',
    'C++ Programmer',
    'Cybersecurity Enthusiast',
    'CTF Player',
    'Ethical Hacking Learner',
    'Machine Learning Enthusiast',
    'Problem Solver'
];

let currentTitleIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
const typingSpeed = 100; // ms per character
const deletingSpeed = 50; // ms per character
const pauseBetweenTitles = 1500; // ms between titles

function typeWriter() {
    const currentTitle = titles[currentTitleIndex];

    if (!isDeleting && currentCharIndex <= currentTitle.length) {
        typingOutput.textContent = currentTitle.substring(0, currentCharIndex);
        currentCharIndex++;
        setTimeout(typeWriter, typingSpeed);
    } else if (isDeleting && currentCharIndex >= 0) {
        typingOutput.textContent = currentTitle.substring(0, currentCharIndex);
        currentCharIndex--;
        setTimeout(typeWriter, deletingSpeed);
    } else {
        if (!isDeleting) {
            // Start deleting after showing full title
            isDeleting = true;
            setTimeout(typeWriter, pauseBetweenTitles);
        } else {
            // Move to next title
            isDeleting = false;
            currentTitleIndex = (currentTitleIndex + 1) % titles.length;
            currentCharIndex = 0;
            setTimeout(typeWriter, 500);
        }
    }
}

// Start typing animation when page loads
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(typeWriter, 800);
});

// ================================================
// SMOOTH SCROLLING NAVIGATION
// ================================================

const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Remove active class from all links
        navLinks.forEach(l => l.classList.remove('active'));
        
        // Add active class to clicked link
        link.classList.add('active');
        
        // Scroll to section
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ================================================
// UPDATE ACTIVE NAV LINK ON SCROLL
// ================================================

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 100) {
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

// ================================================
// SCROLL ANIMATIONS
// ================================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe skill cards, project cards, and about text
document.querySelectorAll('.skill-card, .project-card, .about-text').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    observer.observe(el);
});

// ================================================
// MOBILE MENU HANDLING
// ================================================

// Close mobile menu when link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Any mobile menu closing logic can go here
    });
});

// ================================================
// UTILITY FUNCTIONS
// ================================================

// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Preload images for better performance
function preloadImages() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        const imageLoader = new Image();
        imageLoader.src = img.src;
    });
}

preloadImages();

// ================================================
// INITIALIZATION
// ================================================

window.addEventListener('load', () => {
    // Add loaded class for animations
    bodyElement.classList.add('loaded');
});

// ================================================
// ACCESSIBILITY IMPROVEMENTS
// ================================================

// Ensure keyboard navigation works properly
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close any open menus if needed
    }
});