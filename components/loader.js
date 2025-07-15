// components/loader.js
document.addEventListener("DOMContentLoaded", function() {
  const navbarPath = '../components/navbar.html'; 

  fetch(navbarPath)
    .then(response => response.text())
    .then(data => {
      // 1. Inject the navbar HTML.
      document.getElementById('navbar-placeholder').innerHTML = data;
      
      // 2. Highlight the active link.
      highlightActiveLink();

      // 3. Load the functionality script AFTER the navbar is on the page.
      const script = document.createElement('script');
      script.src = '../Homepage/functionality.js'; // Corrected path assuming a common js folder
      document.body.appendChild(script);
    })
    .catch(error => console.error('Error loading the navbar:', error));
});

function highlightActiveLink() {
  // Use a more specific selector to avoid grabbing every link in the nav
  const navLinks = document.querySelectorAll('#mobile-menu a');
  const currentPath = window.location.pathname;

  navLinks.forEach(link => {
    // Ensure href is not empty to avoid errors with links like #contact
    if (!link.href) return;

    const linkPath = new URL(link.href, window.location.origin).pathname;

    // Check if the current page's path matches the link's path
    if (currentPath === linkPath) {
      // Apply active styles to the matched link
      link.classList.add('font-bold', 'text-black');
      link.classList.remove('font-semibold', 'text-gray-800', 'text-gray-700');
      
      // --- NEW: Check if the active link is inside the Projects dropdown ---
      const projectsMenu = document.getElementById('projects-dropdown-menu');
      if (projectsMenu && projectsMenu.contains(link)) {
        const projectsButton = document.getElementById('projects-dropdown-button');
        if (projectsButton) {
          // Also apply active styles to the main "Projects" button
          projectsButton.classList.add('font-bold', 'text-black');
          projectsButton.classList.remove('font-semibold', 'text-gray-800');
        }
      }
    }
  });
}