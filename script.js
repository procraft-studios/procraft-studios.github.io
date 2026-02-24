// PROCRAFT STUDIOS - JAVASCRIPT

document.addEventListener('DOMContentLoaded', function() {
    
    // Navbar scroll effect
    var navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // Mobile menu toggle
    var mobileToggle = document.getElementById('mobileToggle');
    var navMenu = document.getElementById('navMenu');
    
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', function() {
            mobileToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Smooth scrolling for anchor links
    var allLinks = document.querySelectorAll('a[href^="#"]');
    
    for (var i = 0; i < allLinks.length; i++) {
        allLinks[i].addEventListener('click', function(e) {
            var href = this.getAttribute('href');
            
            if (href !== '#') {
                e.preventDefault();
                var target = document.querySelector(href);
                
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    }

    // Contact form handling
    var contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            var name = contactForm.querySelector('input[type="text"]').value;
            var email = contactForm.querySelector('input[type="email"]').value;
            var message = contactForm.querySelector('textarea').value;
            
            if (name && email && message) {
                alert('Thank you! Your message has been sent successfully.\n\nWe will get back to you soon!');
                contactForm.reset();
            } else {
                alert('Please fill in all fields.');
            }
        });
    }

    // Scroll animations for cards
    var animateElements = document.querySelectorAll('.service-card, .portfolio-item, .pricing-card');
    
    if (animateElements.length > 0) {
        for (var j = 0; j < animateElements.length; j++) {
            animateElements[j].style.opacity = '0';
            animateElements[j].style.transform = 'translateY(30px)';
            animateElements[j].style.transition = 'all 0.6s ease';
        }

        var observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        for (var k = 0; k < animateElements.length; k++) {
            observer.observe(animateElements[k]);
        }
    }

    // Console welcome message
    console.log('ProCraft Studios - Website loaded successfully!');
});
