// js/functionality.js

// --- Mobile Menu Toggle ---
const menuButton = document.getElementById('mobile-menu-button');
const menu = document.getElementById('mobile-menu');

if (menuButton && menu) {
  menuButton.addEventListener('click', (event) => {
    // Stop this click from being caught by the window listener below
    event.stopPropagation();
    const isVisible = menu.classList.contains('opacity-100');
    if (isVisible) {
      menu.classList.remove('opacity-100', 'scale-100', 'pointer-events-auto');
      menu.classList.add('opacity-0', 'scale-95', 'pointer-events-none');
    } else {
      menu.classList.remove('opacity-0', 'scale-95', 'pointer-events-none');
      menu.classList.add('opacity-100', 'scale-100', 'pointer-events-auto');
    }
  });
}

// --- Projects Dropdown Toggle ---
const projectsButton = document.getElementById('projects-dropdown-button');
const projectsMenu = document.getElementById('projects-dropdown-menu');
const projectsArrow = projectsButton.querySelector('svg');

if (projectsButton && projectsMenu && projectsArrow) {
  projectsButton.addEventListener('click', (event) => {
    // Stop the click from closing the main mobile menu
    event.stopPropagation();
    
    // Toggle the visibility of the projects sub-menu
    const isHidden = projectsMenu.classList.toggle('hidden');
    
    // Rotate the arrow icon for visual feedback
    projectsArrow.classList.toggle('rotate-180', !isHidden);
  });
}


// --- Close Menus When Clicking Outside ---
window.addEventListener('click', () => {
  // Close main menu if open
  if (menu && menu.classList.contains('opacity-100')) {
    menu.classList.remove('opacity-100', 'scale-100', 'pointer-events-auto');
    menu.classList.add('opacity-0', 'scale-95', 'pointer-events-none');
  }
  // Close projects dropdown if open
  if (projectsMenu && !projectsMenu.classList.contains('hidden')) {
    projectsMenu.classList.add('hidden');
    projectsArrow.classList.remove('rotate-180');
  }
});

// Prevent clicks *inside* the menu from closing it
if(menu){
    menu.addEventListener('click', (event) => {
        event.stopPropagation();
    });
}


// --- Email Clipboard Function ---
function copyEmailToClipboard() {
  const emailElement = document.getElementById('emailAddress');
  const copiedPopup = document.getElementById('copiedPopup');

  if (!emailElement || !copiedPopup) {
    console.error('Email address or popup element not found.');
    return;
  }

  const email = emailElement.textContent.trim();
  navigator.clipboard.writeText(email)
    .then(() => {
      copiedPopup.classList.remove('hidden');
      copiedPopup.classList.add('opacity-100');
      setTimeout(() => {
        copiedPopup.classList.remove('opacity-100');
        setTimeout(() => {
          copiedPopup.classList.add('hidden');
        }, 300);
      }, 1500);
    })
    .catch(err => {
      console.error('Failed to copy email: ', err);
      alert('Failed to copy email. Please copy it manually: ' + email);
    });
}
