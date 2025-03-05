const passwordInput = document.getElementById("password");
const showPasswordSpan = document.getElementById("show-password");
const contactField = document.querySelector('input[name="contact"]');
const passwordField = document.querySelector('input[name="password"]');
const loginBtn = document.getElementById("login-btn");

passwordInput.addEventListener("input", function () {
  if (passwordInput.value.trim() !== "") {
    showPasswordSpan.style.display = "inline";
  } else {
    showPasswordSpan.style.display = "none";
  }
});

showPasswordSpan.addEventListener("click", function () {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    showPasswordSpan.textContent = "Hide";
  } else {
    passwordInput.type = "password";
    showPasswordSpan.textContent = "Show";
  }
});

function checkInputs() {
  if (contactField.value !== "" && passwordField.value !== "") {
    loginBtn.disabled = false;
    loginBtn.classList.add("active");
  }
}

contactField.addEventListener("input", checkInputs);
passwordField.addEventListener("input", checkInputs);
