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
  let currentPage = window.location.pathname.split("/").pop();

  // Select all navigation links
  let navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  // Loop through each navigation link
  navLinks.forEach((link) => {
    // Remove 'active' class from all links
    link.classList.remove("active");

    // Check if the link's href matches the current page
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active"); // Add 'active' class to the matching link
    }
  });
});


