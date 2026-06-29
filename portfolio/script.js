document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Scroll Reveal Animation Logic
    const reveals = document.querySelectorAll(".reveal");

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 120; // Trigger distance

        reveals.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add("active");
            }
        });
    };
    
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); 

    // 2. Initialize Vanilla Tilt (3D Card Hover Effect)
    if (typeof VanillaTilt !== "undefined") {
        VanillaTilt.init(document.querySelectorAll(".tilt-card"), {
            max: 5,           
            speed: 400,       
            glare: true,      
            "max-glare": 0.15, 
            scale: 1.02,
            gyroscope: false       
        });
    }

    // 3. Dark/Light Mode Toggle Logic
    const themeBtn = document.getElementById('theme-btn');
    const themeIcon = themeBtn.querySelector('i');
    
    // Check saved theme in LocalStorage, default to dark
    const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
    document.body.setAttribute('data-theme', savedTheme);
    updateIcon(savedTheme);

    // Toggle button click event
    themeBtn.addEventListener('click', () => {
        const currentTheme = document.body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        // Apply new theme
        document.body.setAttribute('data-theme', newTheme);
        localStorage.setItem('portfolio-theme', newTheme);
        updateIcon(newTheme);
    });

    function updateIcon(theme) {
        if (theme === 'light') {
            themeIcon.className = 'fas fa-moon';
        } else {
            themeIcon.className = 'fas fa-sun';
        }
    }
});