document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const category = document.querySelector('select[name="category"]').value;
    const query = document.querySelector('input[name="search"]').value;
    
    // Implement search functionality here
    console.log(Searching for "${query}" in category "${category}");
});
