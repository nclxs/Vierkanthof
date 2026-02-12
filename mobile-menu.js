document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (!hamburger || !mobileMenu) return;
    
    // Toggle menu
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });
    
    // Close on link click
    document.querySelectorAll('.menu-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    });
    
    // Close on overlay click
    mobileMenu.addEventListener('click', function(e) {
        if (e.target === this) {
            hamburger.classList.remove('active');
            this.classList.remove('active');
            document.body.classList.remove('no-scroll');
        }
    });
});
