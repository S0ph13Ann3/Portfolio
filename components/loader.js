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
      script.src = '../Homepage/functionality.js'; 
      document.body.appendChild(script);
    })
    .catch(error => console.error('Error loading the navbar:', error));
});

function highlightActiveLink() {
  const navLinks = document.querySelectorAll('nav a');
  const currentPath = window.location.pathname;

  navLinks.forEach(link => {
    const linkPath = new URL(link.href, window.location.origin).pathname;
    
    if (currentPath.endsWith(linkPath)) {
      link.classList.add('font-bold', 'text-black');
      link.classList.remove('font-semibold', 'text-gray-800');
    }
  });
}
