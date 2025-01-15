// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Change About Me section style based on scroll position
window.addEventListener('scroll', function() {
    const aboutSection = document.querySelector('.about');
    const aboutSectionPosition = aboutSection.getBoundingClientRect().top;

    if (aboutSectionPosition <= window.innerHeight / 2) {
        aboutSection.classList.add('scrolled');
    } else {
        aboutSection.classList.remove('scrolled');
    }
});

// HOPEFUL FIX FOR THE STUPID CHROME 180 DEGREE ROTATION
if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
    const video = document.querySelector('.video-container video');
    video.style.transform = 'rotate(180deg)';
}

