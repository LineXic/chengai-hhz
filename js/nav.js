document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  // Close the navigation when clicking a link
  navMenu.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      if (window.innerWidth < 768) {
        navMenu.classList.remove('active');
      }
    }
  });
});
