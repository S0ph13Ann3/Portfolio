// components/photostrip_animation.js

document.addEventListener("DOMContentLoaded", () => {
  const stripWrapper = document.querySelector('.photo-strip-wrapper');

  // Options for the observer (when to trigger)
  const options = {
    root: null, // use the browser viewport
    rootMargin: '0px',
    threshold: 0.4 // Trigger when 40% of the element is visible in viewport
  };

  // The function to run when intersection changes
  const intersectionCallback = (entries, observer) => {
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the class that triggers the CSS scroll state
        entry.target.classList.add('is-scrolled');
        // Optional: Stop observing once it's scrolled in once
        // observer.unobserve(entry.target); 
      } else {
         // Optional: Remove this else block if you want it to stay fanned out once scrolled past
         entry.target.classList.remove('is-scrolled');
      }
    });
  };

  // Create the observer
  const observer = new IntersectionObserver(intersectionCallback, options);

  // Start observing the target
  if (stripWrapper) {
    observer.observe(stripWrapper);
  }
});