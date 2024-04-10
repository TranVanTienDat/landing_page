const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Lấy các phần tử cần thiết từ DOM
const signInButton = document.getElementById("button-sign-in");
const emailInput = document.getElementById("sign-in-email");
const passwordInput = document.getElementById("sign-in-password");

const handleSignIn = () => {
  // Lấy giá trị email và mật khẩu từ input
  const email = emailInput.value;
  const password = passwordInput.value;

  // Kiểm tra xem email và mật khẩu có hợp lệ không
  if (!validateEmail(email)) {
    displayErrorMessage(emailInput, "Sai định dạng email.");
  } else if (!validatePassword(password)) {
    displayErrorMessage(passwordInput, "Mật khẩu phải có ít nhất 8 ký tự.");
  } else {
    displaySuccessMessage(emailInput, "Success");
    displaySuccessMessage(passwordInput, "Success");
    setTimeout(() => confirm("Đăng nhập thành công"), 1000);
  }
};

const registerButton = document.getElementById("button-register");
const emailInputRegister = document.getElementById("register-email");
const passwordInputRegister = document.getElementById("register-password");
const passwordInputRegisterConfirm = document.getElementById(
  "register-password-confirm"
);
const handleRegister = () => {
  const email = emailInputRegister.value;
  const password = passwordInputRegister.value;
  const confirmPassword = passwordInputRegisterConfirm.value;

  if (!validateEmail(email)) {
    displayErrorMessage(emailInputRegister, "Sai định dạng email.");
  } else if (!validatePassword(password)) {
    displayErrorMessage(
      passwordInputRegister,
      "Mật khẩu phải có ít nhất 8 ký tự."
    );
  } else if (!(password === confirmPassword)) {
    displayErrorMessage(
      passwordInputRegisterConfirm,
      "Mật khẩu không trùng khớp."
    );
  } else {
    displaySuccessMessage(emailInputRegister, "Success");
    displaySuccessMessage(passwordInputRegister, "Success");
    displaySuccessMessage(passwordInputRegisterConfirm, "Success");
    setTimeout(() => confirm("Đăng kí thành công"), 1000);
  }
};

// Hàm hiển thị thông điệp lỗi và đúng và thay đổi giao diện
function displayErrorMessage(inputElement, message) {
  const errorMessage = inputElement.nextElementSibling;
  errorMessage.textContent = message;
  errorMessage.style.display = "block";
  errorMessage.style.color = "#bb5465";
  inputElement.style.backgroundColor = "#fcf6f7";
  inputElement.style.borderColor = "#bb5465";
}
function displaySuccessMessage(inputElement, message) {
  const errorMessage = inputElement.nextElementSibling;
  errorMessage.textContent = message;
  errorMessage.style.display = "block";
  errorMessage.style.color = "#07bc0c";
  inputElement.style.backgroundColor = "#fff";
  inputElement.style.borderColor = "#07bc0c";
}

// Hàm kiểm tra
const validateEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

const validatePassword = (password) => {
  const passwordRegex = /^.{8,}$/;
  return passwordRegex.test(password);
};
