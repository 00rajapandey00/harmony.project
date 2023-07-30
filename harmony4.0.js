const menuBtn = document.querySelector('.menu-btn');
const sidebar = document.querySelector('.sidebar');
let menuOpen = false;

function openSidebar() {
  menuBtn.classList.add('open');
  sidebar.style.right = '0'; // Slide the sidebar in from the right side
  menuOpen = true;
}

function closeSidebar() {
  menuBtn.classList.remove('open');
  sidebar.style.right = '-250px'; // Slide the sidebar out to the right side
  menuOpen = false;
}

function toggleSidebarVisibility() {
  if (window.innerWidth <= 686) {
    sidebar.classList.add('show-sidebar');
  } else {
    sidebar.classList.remove('show-sidebar');
    closeSidebar(); // Close the sidebar when the screen size changes above the breakpoint
  }
}

// Initial check when the page loads
toggleSidebarVisibility();

// Check when the window is resized
window.addEventListener('resize', () => {
  toggleSidebarVisibility();

  if (window.innerWidth > 668) {
    closeSidebar();
  }
});

// Click event listener for the menu button
menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    openSidebar();
  } else {
    closeSidebar();
  }
});

// Click event listener for clicks outside the sidebar
document.addEventListener('click', (event) => {
  if (menuOpen && !sidebar.contains(event.target) && !menuBtn.contains(event.target)) {
    closeSidebar();
  }
});
