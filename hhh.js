const buttons = document.querySelectorAll('.filter-btn');
const products = document.querySelectorAll('.product-item');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        buttons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');

        const category = button.getAttribute('data-category');

        products.forEach(product => {
            if (category === 'all') {
                product.style.display = 'block';
            } else {
                product.style.display = product.getAttribute('data-category') === category ? 'block' : 'none';
            }
        });
    });
});

// Set 'All' filter active by default on page load
document.querySelector('.filter-btn[data-category="all"]').classList.add('active');