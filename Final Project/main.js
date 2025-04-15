function validateContactForm() {
  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var message = document.getElementById("message").value.trim();
  var formMessage = document.getElementById("formMessage");

  if (name === "" || email === "" || message === "") {
    formMessage.textContent = "All fields are required.";
    formMessage.style.color = "red";
    return false;
  } else {
    formMessage.textContent = "Thank you for your message!";
    formMessage.style.color = "green";
    return true;
  }
}
