// Simple form validation and submission handling
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Please fill out all fields.");
    return;
  }

  if (!email.includes("@")) {
    alert("Please enter a valid email address.");
    return;
  }

  alert("Thank you, " + name + "! Your message has been sent.");
  this.reset();
});
