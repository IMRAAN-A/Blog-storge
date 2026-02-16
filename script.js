console.log('Lumina Blog loaded');

// Mobile Menu Toggle
const menuToggle = document.querySelector('.mobile-menu-toggle');
// Note: We would need a real mobile menu implementation here, 
// for now creating a simple toggle effect if the nav existed.
// Since nav is hidden via CSS @media, we'd need to add a visible class.

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        alert('Mobile menu feature coming soon!');
    });
}

// Category Filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const articles = document.querySelectorAll('.articles-grid .blog-card');

if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add to clicked
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            articles.forEach(article => {
                if (filterValue === 'all') {
                    article.style.display = 'block';
                } else {
                    if (article.getAttribute('data-category') === filterValue) {
                        article.style.display = 'block';
                    } else {
                        article.style.display = 'none';
                    }
                }
            });
        });
    });
}
