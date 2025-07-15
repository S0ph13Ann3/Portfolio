// components/footer-loader.js

document.addEventListener("DOMContentLoaded", function() {
  // 1. Define the path to your footer HTML file.
  //    Make sure this path is correct based on your project structure.
  const footerPath = '../components/footer.html'; 

  // 2. Find the placeholder element in your main HTML.
  const footerPlaceholder = document.getElementById('footer-placeholder');

  // 3. Check if the placeholder exists on the page before trying to load the footer.
  if (footerPlaceholder) {
    fetch(footerPath)
      .then(response => {
        // Check if the file was found and the response is ok.
        if (!response.ok) {
          throw new Error(`Could not load footer, status: ${response.status}`);
        }
        return response.text();
      })
      .then(data => {
        // Inject the fetched HTML content into the placeholder div.
        footerPlaceholder.innerHTML = data;
      })
      .catch(error => {
        console.error('Error loading the footer:', error);
        // You could also display a user-friendly error message in the placeholder.
        footerPlaceholder.innerHTML = "<p class='text-center text-red-500'>Sorry, the footer could not be loaded.</p>";
      });
  }
});
