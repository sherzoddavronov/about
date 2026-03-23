// Hide loading spinner when page loads
window.addEventListener('load', function() {
    var spinner = document.getElementById('loadingSpinner');
    if (spinner) {
        setTimeout(function() {
            spinner.classList.add('hidden');
        }, 800);
    }
});

particlesJS("particles", {
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#5757cc"
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#5757cc"
            }
        },
        opacity: {
            value: 0.8,
            random: true,
            animation: {
                enable: true,
                speed: 9,
                opacity_min: 0,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#fff",
            opacity: 0.7,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
        }
    },
    interactivity: {
        detectsOn: "canvas",
        events: {
            onHover: {
                enable: true,
                mode: "push"
            },
            onClick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            repulse: {
                distance: 100,
                duration: 0.9
            },
            push: {
                particles_nb: 7
            }
        }
    },
    retina_detect: true
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
    });
}

window.addEventListener('scroll', function () {
    var scrollTopButton = document.querySelector('.scroll-top');
    if (this.window.pageYOffset > 200) {
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
});

// Contact form submit handler: show success message and reset form
document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('contactForm');
    var response = document.getElementById('responseMessage');

    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // simple validation (ensure required fields are filled)
        var name = form.querySelector('#name');
        var email = form.querySelector('#email');
        var message = form.querySelector('#message');
        if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
            response.textContent = 'Please fill in the required fields.';
            response.classList.add('show');
            setTimeout(function () { response.classList.remove('show'); }, 3000);
            return;
        }

        // simulate sending
        response.textContent = 'Message sent!';
        response.classList.add('show');

        // reset form after a short delay to let user see the message
        setTimeout(function () {
            form.reset();
        }, 600);

        // hide response after 3.5s
        setTimeout(function () { response.classList.remove('show'); }, 3500);
    });

    // Scroll reveal animation using Intersection Observer
    setupScrollReveal();
});

// Setup scroll reveal animations
function setupScrollReveal() {
    var revealElements = document.querySelectorAll('#about .card, #about .feature-cards .card');
    
    var observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -80px 0px'
    };

    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('scroll-reveal');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    revealElements.forEach(function(el) {
        observer.observe(el);
    });
}
