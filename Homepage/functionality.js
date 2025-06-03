// js/functionality.js

// --- Mobile Menu Toggle ---
document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.getElementById('mobile-menu-button');
  const menu = document.getElementById('mobile-menu');

  if (menuButton && menu) {
    menuButton.addEventListener('click', () => {
      const isVisible = menu.classList.contains('opacity-100');

      if (isVisible) {
        // Hide with transition
        menu.classList.remove('opacity-100', 'scale-100', 'pointer-events-auto');
        menu.classList.add('opacity-0', 'scale-95', 'pointer-events-none');
      } else {
        // Show with transition
        menu.classList.remove('opacity-0', 'scale-95', 'pointer-events-none');
        menu.classList.add('opacity-100', 'scale-100', 'pointer-events-auto');
      }
    });

    // Optional: Hide when a link is clicked
    const links = menu.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('opacity-100', 'scale-100', 'pointer-events-auto');
        menu.classList.add('opacity-0', 'scale-95', 'pointer-events-none');
      });
    });
  }
});




// --- Email Clipboard Function ---
function copyEmailToClipboard() {
  const email = document.getElementById('emailAddress').textContent;
  const copiedPopup = document.getElementById('copiedPopup');

  // Check if the necessary elements exist to prevent errors.
  if (!email || !copiedPopup) {
    console.error('Email address or popup element not found.');
    return;
  }

  // Use the modern Navigator API to copy text to the clipboard.
  navigator.clipboard.writeText(email)
    .then(() => {
      // On success, show the confirmation popup.
      copiedPopup.classList.remove('hidden');
      copiedPopup.classList.add('opacity-100');

      // Set a timer to hide the popup after a short period.
      setTimeout(() => {
        copiedPopup.classList.remove('opacity-100');
        // Wait for the fade-out transition to complete before setting display: none.
        setTimeout(() => {
          copiedPopup.classList.add('hidden');
        }, 300); // This duration should match your CSS transition duration.
      }, 1500); // Popup is visible for 1.5 seconds.

      console.log('Email copied to clipboard:', email);
    })
    .catch(err => {
      // If copying fails, log the error and alert the user.
      console.error('Failed to copy email: ', err);
      alert('Failed to copy email. Please copy it manually: ' + email);
    });
}