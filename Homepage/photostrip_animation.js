// components/photostrip_animation.js

document.addEventListener("DOMContentLoaded", () => {
  const aboutSection = document.querySelector('.about');
  const stripWrapper = document.querySelector('.photo-strip-wrapper');

  // Options for the observer (when to trigger)
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3 // Trigger when 30% of the About section is visible
  };

  // The function to run when intersection changes
  const intersectionCallback = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        stripWrapper.classList.add('is-scrolled');
      } else {
        stripWrapper.classList.remove('is-scrolled');
      }
    });
  };

  // Create the observer
  const observer = new IntersectionObserver(intersectionCallback, options);

  if (aboutSection && stripWrapper) {
    observer.observe(aboutSection);
  }
});