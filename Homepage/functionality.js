// js/script.js

function copyEmailToClipboard() {
  const email = document.getElementById('emailAddress').textContent;
  const copiedPopup = document.getElementById('copiedPopup');

  navigator.clipboard.writeText(email)
    .then(() => {
      // Show the popup
      copiedPopup.classList.remove('hidden');
      copiedPopup.classList.add('opacity-100');

      // Hide the popup after a delay
      setTimeout(() => {
        copiedPopup.classList.remove('opacity-100');
        // Wait for the fade-out transition to complete before setting display: none
        setTimeout(() => {
          copiedPopup.classList.add('hidden');
        }, 300); // This duration should match the transition-opacity duration
      }, 1500); // Show for 1.5 seconds (adjust as needed)

      console.log('Email copied to clipboard:', email);
    })
    .catch(err => {
      console.error('Failed to copy email: ', err);
      alert('Failed to copy email. Please copy manually: ' + email);
    });
}