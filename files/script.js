// Function to fetch image search results from Lexica API
function fetchImage(query) {
    // Construct the URL for the API request
    const apiUrl = `https://lexica.art/api/v1/search?q=${query}`;
  
    // Make the HTTP GET request
    fetch(apiUrl)
      .then(response => response.json()) // Parse response JSON
      .then(data => {
        // Check if there are search results
        
        if (data && data.images && data.images.length > 0) {
          // Get a random image from the search results
          const randomIndex = Math.floor(Math.random() * data.images.length);
          const imageUrl = data.images[randomIndex].src;
  
          // Set the background image of the event date div
          const eventDateDiv = document.querySelector('.event-date');
          eventDateDiv.style.backgroundImage = `url(${imageUrl})`;
          eventDateDiv.style.backgroundImage = `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url(${imageUrl})`;
          eventDateDiv.style.backgroundSize = 'cover';
          eventDateDiv.style.backgroundPosition = 'center';
        }
      })
      .catch(error => {
        console.error('Error fetching image:', error);
      });
  }
  
  // Call the fetchImage function with your search query
// fetchImage('kashmir');
  