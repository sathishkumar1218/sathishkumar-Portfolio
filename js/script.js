

 /*  Resume Button hide And Show Function */
 document.addEventListener("DOMContentLoaded", function () {
  var navbarToggler = document.querySelector(".navbar-toggler");
  var resumeButton = document.getElementById("resumeButton");
  
  navbarToggler.addEventListener("click", function () {
      if (window.innerWidth < 992) {
          resumeButton.classList.toggle("d-none");
      }
  });
});

/*  Alert message for get in touch section */

document.addEventListener("DOMContentLoaded", function () {
    console.log("DOMContentLoaded event triggered");
  
    const contactForm = document.getElementById("contactForm");
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the default form submission
      alert("Message sent successfully!");
      this.reset(); // Clear the form fields
    });
  });
  




  /*  Navigation link color changes for diferent pages */
  document.addEventListener("DOMContentLoaded", function () {
    // Get the current page filename (e.g., "about.html")
    let currentPage = window.location.pathname.split("/").pop() || "index.html";
  
    // Select all navigation links
    let navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  
    // Function to set active link with white color
    function setActiveLink(link) {
      navLinks.forEach((navItem) => {
        navItem.classList.remove("active", "text-white");
      });
      link.classList.add("active", "text-white");
    }
  
    // Set the active link on page load based on current URL
    navLinks.forEach((link) => {
      let linkPage = link.getAttribute("href").split("/").pop();
      if (linkPage === currentPage) {
        setActiveLink(link);
      }
  
      // Set the active link and color on click
      link.addEventListener("click", function () {
        setActiveLink(link);
      });
    });
  });
  






