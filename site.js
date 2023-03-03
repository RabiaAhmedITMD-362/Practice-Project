const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const loginBtn = document.getElementsByTagName("span")[0];
const registerBtn = document.getElementsByTagName("span")[1];
const indicator = document.getElementById("indicator");

registerBtn.addEventListener("click", () => {
  registerForm.style.display = "block";
  loginForm.style.display = "none";
  registerBtn.classList.add("active");
  loginBtn.classList.remove("active");
  indicator.style.width = registerBtn.offsetWidth + "px";
  indicator.style.left = registerBtn.offsetLeft + "px";
});

loginBtn.addEventListener("click", () => {
  registerForm.style.display = "none";
  loginForm.style.display = "block";
  loginBtn.classList.add("active");
  registerBtn.classList.remove("active");
  indicator.style.width = loginBtn.offsetWidth + "px";
  indicator.style.left = loginBtn.offsetLeft + "px";
});

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // Login form submit logic here
});

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // Register form submit logic here
});
