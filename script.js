// script.js

// Function to handle the click event of the "Download" button
function handleDownloadButtonClick() {
    alert("Thank you for your interest! The download feature is currently under development.");
  }
  
  // Adding event listeners to elements after the page has loaded
  document.addEventListener("DOMContentLoaded", function () {
    const downloadButtons = document.querySelectorAll(".btn-download");
    downloadButtons.forEach((button) => {
      button.addEventListener("click", handleDownloadButtonClick);
    });
  });
  // script.js

// Function to handle the click event of the "Join us!" links
function handleJoinUsLinkClick(event) {
    event.preventDefault(); // Prevent default link behavior (e.g., navigating to the href)
  
    // Redirect to https://www.littlehearts.org/
    window.location.href = "https://www.littlehearts.org/";
  }
  
  // Adding event listeners to "Join us!" links after the page has loaded
  document.addEventListener("DOMContentLoaded", function () {
    const joinUsLinks = document.querySelectorAll(".icon-link");
    joinUsLinks.forEach((link) => {
      link.addEventListener("click", handleJoinUsLinkClick);
    });
  });
 // script.js

// Function to handle form submission
function handleNewsletterSubmission(event) {
    event.preventDefault(); // Prevent the form from submitting via the default behavior
  
    // Get the values from the form inputs
    const emailInput = document.getElementById("newsletter1");
    const email = emailInput.value;
  
    // Perform validation (you can add more validation checks if needed)
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return; // Don't proceed further if the email is invalid
    }
  
    // If the email is valid, you can submit the form to your server or perform any other action
    // For demonstration purposes, we'll display a success message
    displaySuccessMessage();
    emailInput.value = ''; // Clear the input field after successful submission
  }
  
  // Function to validate email format
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  // Function to display success message
  function displaySuccessMessage() {
    const successMessage = document.createElement('p');
    successMessage.textContent = "Thank you for subscribing to our newsletter!";
    successMessage.classList.add('text-success');
    
    const form = document.getElementById('newsletterForm');
    form.appendChild(successMessage);
  }
  
  // Adding event listener to the form for form submission
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("newsletterForm");
    form.addEventListener("submit", handleNewsletterSubmission);
  });
  // script.js

// Function to handle the "Donate Now!" button click
function handleDonateButtonClick() {
    const donationPageURL = "https://www.littlehearts.org/"; // URL of the donation page
    window.location.href = donationPageURL;
  }
  
  // Adding event listener to the "Donate Now!" button
  document.addEventListener("DOMContentLoaded", function () {
    const donateButton = document.getElementById("donateButton");
    donateButton.addEventListener("click", handleDonateButtonClick);
  });
   

// Function to toggle between light and dark themes
function toggleTheme() {
    const body = document.body;
    if (body.classList.contains('dark-theme')) {
      body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    } else {
      body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    }
  }
  
  // Function to set the theme based on user preference or system preference
  function setTheme() {
    const body = document.body;
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      body.classList.add('dark-theme');
    } else if (theme === 'light') {
      body.classList.remove('dark-theme');
    } else {
      // If the user preference is not set, check the system preference
      const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDarkScheme) {
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
      } else {
        body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');
      }
    }
  }
  
  // Event listener for the theme toggle button
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  themeToggleBtn.addEventListener('click', toggleTheme);
  
  // Call the setTheme function when the page loads
  document.addEventListener('DOMContentLoaded', setTheme);
  

