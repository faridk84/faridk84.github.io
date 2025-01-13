document.querySelector('.search-button').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    const searchQuery = document.querySelector('.search-form input').value.toLowerCase(); // Get the search query
    const flightItems = document.querySelectorAll('.flight-item'); // All flight items

    flightItems.forEach(item => {
        const flightName = item.getAttribute('data-name').toLowerCase(); // Get the flight name
        const flightDescription = item.querySelector('.flight-details p').textContent.toLowerCase(); // Get the flight description

        // Check if search query matches the flight name or description
        if (
            flightName.includes(searchQuery) || 
            flightDescription.includes(searchQuery)
        ) {
            item.style.display = 'flex'; // Show the item using flexbox
        } else {
            item.style.display = 'none'; // Hide the item entirely
        }
    });
});
