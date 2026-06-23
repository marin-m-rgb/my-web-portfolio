const filterBtns = document.querySelectorAll('.filter-btn');
const skillIcons = document.querySelectorAll('.skill-icon');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // 1. Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // 2. Add active class to the clicked button
        btn.classList.add('active');

        // 3. Get the filter category 
        const filterValue = btn.getAttribute('data-filter');

        // 4. Show or hide icons based on the category
        skillIcons.forEach(icon => {
            if (filterValue === 'all' || icon.classList.contains(filterValue)) {
                icon.classList.remove('hidden');
            } else {
                icon.classList.add('hidden');
            }
        });
    });
});