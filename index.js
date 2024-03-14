document.addEventListener("DOMContentLoaded", function () {
    document.body.classList.add("loaded");
  
    // Check if it's the first visit during this session
    const isFirstVisit = !sessionStorage.getItem("hasVisited");
  
    if (isFirstVisit) {
      // Apply transition for the first visit
      document.querySelectorAll(".progress-bar-wrap").forEach(function (progressBar) {
        progressBar.style.width = "100%";
      });
  
      // Set a flag in session storage to indicate that the page has been visited
      sessionStorage.setItem("hasVisited", "true");
    }
  
    // Scroll to the top when the page is loaded
    window.scrollTo(0, 0);
  
    // Smooth scroll to anchor links
    document.querySelectorAll('a.nav-link').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
  
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 50,
            behavior: 'smooth'
          });
        }
      });
    });
  });
  