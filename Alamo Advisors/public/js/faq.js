// FAQ Page Functionality

document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const searchInput = document.getElementById('faqSearch');
    const faqItems = document.querySelectorAll('.faq-item');
    const categoryButtons = document.querySelectorAll('.faq-category-btn');
    const faqQuestions = document.querySelectorAll('.faq-question');
    const faqContent = document.querySelector('.faq-content');
    
    // Create no results message
    const noResultsMsg = document.createElement('div');
    noResultsMsg.className = 'faq-no-results';
    noResultsMsg.innerHTML = '<p>No questions found matching your search. Try different keywords or browse by category.</p>';
    faqContent.appendChild(noResultsMsg);
    
    // Initialize - all items collapsed by default
    faqItems.forEach(item => {
        item.classList.remove('expanded');
    });
    
    // Check if no items are visible
    function checkVisibility() {
        const visibleItems = Array.from(faqItems).filter(item => item.style.display !== 'none');
        if (visibleItems.length === 0) {
            noResultsMsg.classList.add('show');
        } else {
            noResultsMsg.classList.remove('show');
        }
    }
    
    // Search functionality with debouncing
    let searchTimeout;
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                const searchTerm = e.target.value.toLowerCase().trim();
                
                faqItems.forEach(item => {
                    const question = item.querySelector('.faq-question').textContent.toLowerCase();
                    const answer = item.querySelector('.faq-answer').textContent.toLowerCase();
                    
                    if (searchTerm === '' || question.includes(searchTerm) || answer.includes(searchTerm)) {
                        item.style.display = 'block';
                        // Auto-expand matching items when searching
                        if (searchTerm !== '' && (question.includes(searchTerm) || answer.includes(searchTerm))) {
                            item.classList.add('expanded');
                        }
                    } else {
                        item.style.display = 'none';
                        item.classList.remove('expanded');
                    }
                });
                
                checkVisibility();
            }, 300);
        });
    }
    
    // Category filtering
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const category = this.getAttribute('data-category');
            
            // Show/hide items based on category
            faqItems.forEach(item => {
                if (category === 'all' || item.getAttribute('data-category') === category) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
                // Collapse all items when switching categories
                item.classList.remove('expanded');
            });
            
            // Clear search when changing categories
            if (searchInput) {
                searchInput.value = '';
            }
            
            checkVisibility();
            
            // Smooth scroll to first visible item
            const firstVisible = Array.from(faqItems).find(item => item.style.display !== 'none');
            if (firstVisible && category !== 'all') {
                setTimeout(() => {
                    firstVisible.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }, 100);
            }
        });
    });
    
    // Collapsible FAQ items with smooth animation
    faqQuestions.forEach(question => {
        question.addEventListener('click', function(e) {
            e.preventDefault();
            const item = this.parentElement;
            const wasExpanded = item.classList.contains('expanded');
            
            // Toggle expanded state
            if (wasExpanded) {
                item.classList.remove('expanded');
            } else {
                item.classList.add('expanded');
                
                // Optional: Close other items (accordion behavior)
                // Uncomment the lines below if you want only one item open at a time
                // faqItems.forEach(otherItem => {
                //     if (otherItem !== item) {
                //         otherItem.classList.remove('expanded');
                //     }
                // });
            }
        });
        
        // Add keyboard accessibility
        question.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
        
        // Add ARIA attributes for accessibility
        question.setAttribute('role', 'button');
        question.setAttribute('aria-expanded', 'false');
        question.setAttribute('tabindex', '0');
    });
    
    // Update ARIA attributes when items expand/collapse
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.attributeName === 'class') {
                const item = mutation.target;
                const question = item.querySelector('.faq-question');
                const isExpanded = item.classList.contains('expanded');
                question.setAttribute('aria-expanded', isExpanded);
            }
        });
    });
    
    faqItems.forEach(item => {
        observer.observe(item, { attributes: true });
    });
    
    // Initial visibility check
    checkVisibility();
});
