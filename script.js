// Navbar toggle functionality
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');
}));

// Sticky navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // In a real application, you would send this data to a server
        // For this frontend-only implementation, we'll just show an alert
        alert(`Thank you for your message, ${name}! We'll get back to you soon.`);
        
        // Reset form
        contactForm.reset();
    });
}

// Sample blog post data
const blogPosts = [
    {
        id: 1,
        title: "The Future of Web Design",
        excerpt: "Exploring the latest trends and technologies shaping the future of web design in 2023 and beyond.",
        image: "https://images.unsplash.com/photo-1547661362-0a7d47c0a612?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
        date: "May 10, 2023",
        category: "Design"
    },
    {
        id: 2,
        title: "JavaScript Frameworks Comparison",
        excerpt: "A detailed comparison of the most popular JavaScript frameworks and when to use each one.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
        date: "May 5, 2023",
        category: "Development"
    },
    {
        id: 3,
        title: "Building Accessible Websites",
        excerpt: "Learn how to create websites that are accessible to all users, including those with disabilities.",
        image: "https://images.unsplash.com/photo-1551650975-835a074eee33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
        date: "April 28, 2023",
        category: "Accessibility"
    },
    {
        id: 4,
        title: "Optimizing Website Performance",
        excerpt: "Practical tips and techniques to improve your website's loading speed and overall performance.",
        image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
        date: "April 20, 2023",
        category: "Performance"
    },
    {
        id: 5,
        title: "The Art of CSS Grid",
        excerpt: "Mastering CSS Grid layout system to create complex and responsive web designs.",
        image: "https://images.unsplash.com/photo-1633356122102-3fe601e01bd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
        date: "April 15, 2023",
        category: "CSS"
    },
    {
        id: 6,
        title: "Introduction to Web Accessibility",
        excerpt: "Understanding the basics of web accessibility and why it matters for inclusive design.",
        image: "https://images.unsplash.com/photo-1551650992-ee4fd47a0b5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
        date: "April 10, 2023",
        category: "Accessibility"
    }
];

// Function to generate blog post cards
function generatePostCard(post) {
    return `
        <div class="post-card">
            <div class="post-image">
                <img src="${post.image}" alt="${post.title}">
            </div>
            <div class="post-content">
                <span class="post-category">${post.category}</span>
                <h3>${post.title}</h3>
                <p class="post-excerpt">${post.excerpt}</p>
                <div class="post-meta">
                    <span class="post-date">${post.date}</span>
                </div>
                <a href="post.html" class="read-more">Read More</a>
            </div>
        </div>
    `;
}

// Function to display featured posts on home page
function displayFeaturedPosts() {
    const featuredPostsContainer = document.querySelector('.featured-posts .posts-grid');
    if (featuredPostsContainer) {
        // Display first 3 posts as featured
        const featuredPosts = blogPosts.slice(0, 3);
        featuredPostsContainer.innerHTML = featuredPosts.map(generatePostCard).join('');
    }
}

// Function to display all blog posts on blog page
function displayAllPosts() {
    const blogPostsContainer = document.querySelector('.blog-posts .posts-grid');
    if (blogPostsContainer) {
        blogPostsContainer.innerHTML = blogPosts.map(generatePostCard).join('');
    }
}

// Function to display related posts on single post page
function displayRelatedPosts() {
    const relatedPostsContainer = document.querySelector('.related-posts .posts-grid');
    if (relatedPostsContainer) {
        // Display last 3 posts as related
        const relatedPosts = blogPosts.slice(-3);
        relatedPostsContainer.innerHTML = relatedPosts.map(generatePostCard).join('');
    }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Display posts based on current page
    if (document.querySelector('.featured-posts')) {
        displayFeaturedPosts();
    }
    
    if (document.querySelector('.blog-posts')) {
        displayAllPosts();
    }
    
    if (document.querySelector('.related-posts')) {
        displayRelatedPosts();
    }
    
    // Add animation to elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.post-card, .team-member, .about-text, .contact-info');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = "1";
                element.style.transform = "translateY(0)";
            }
        });
    };
    
    // Set initial state for animated elements
    document.querySelectorAll('.post-card, .team-member, .about-text, .contact-info').forEach(element => {
        element.style.opacity = "0";
        element.style.transform = "translateY(20px)";
        element.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    });
    
    // Listen for scroll events
    window.addEventListener('scroll', animateOnScroll);
    
    // Trigger once on page load
    animateOnScroll();
});