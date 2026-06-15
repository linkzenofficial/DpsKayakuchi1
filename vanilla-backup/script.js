document.addEventListener('DOMContentLoaded', () => {
    /* ==========================================================================
       Mobile Navigation Toggle
       ========================================================================== */
    const primaryNav = document.getElementById('primary-navigation');
    const navToggle = document.querySelector('.mobile-nav-toggle');

    navToggle.addEventListener('click', () => {
        const visibility = primaryNav.getAttribute('data-visible');
        
        if (visibility === 'false') {
            primaryNav.setAttribute('data-visible', 'true');
            navToggle.setAttribute('aria-expanded', 'true');
        } else {
            primaryNav.setAttribute('data-visible', 'false');
            navToggle.setAttribute('aria-expanded', 'false');
        }
    });

    // Close mobile menu when a link is clicked
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            primaryNav.setAttribute('data-visible', 'false');
            navToggle.setAttribute('aria-expanded', 'false');
        });
    });

    /* ==========================================================================
       Sticky Header on Scroll
       ========================================================================== */
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    /* ==========================================================================
       Single Page App - Section Toggling
       ========================================================================== */
    const sections = document.querySelectorAll('section');
    
    function showSection(id) {
        sections.forEach(section => {
            if (section.getAttribute('id') === id) {
                // Restore original display style by removing none
                section.style.display = ''; 
            } else {
                section.style.display = 'none';
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${id}`) {
                link.classList.add('active');
            }
        });
        window.scrollTo(0, 0);
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                showSection(targetId);
                
                // close mobile menu
                primaryNav.setAttribute('data-visible', 'false');
                const navToggle = document.querySelector('.mobile-nav-toggle');
                if(navToggle) navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // Initialize to show home (or based on hash)
    const initialHash = window.location.hash.substring(1) || 'home';
    if (document.getElementById(initialHash)) {
        showSection(initialHash);
    } else {
        showSection('home');
    }

    /* ==========================================================================
       Enquiry Form Submission Prevent Default
       ========================================================================== */
    const enquiryForm = document.getElementById('enquiryForm');
    if(enquiryForm) {
        enquiryForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your enquiry! We will get back to you soon.');
            enquiryForm.reset();
        });
    }

    const newsletterForm = document.querySelector('.newsletter-form');
    if(newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for subscribing to our newsletter!');
            newsletterForm.reset();
        });
    }
});
