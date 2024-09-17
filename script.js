document.addEventListener("DOMContentLoaded", function () {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");

    const form = document.getElementById("registration-form");

    // Validation for Name
    function validateName() {
        if (nameInput.value.trim() === "") {
            nameError.style.display = "block";
        } else {
            nameError.style.display = "none";
        }
    }

    // Validation for Email
    function validateEmail() {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value)) {
            emailError.style.display = "block";
        } else {
            emailError.style.display = "none";
        }
    }

    // Validation for Password
    function validatePassword() {
        if (passwordInput.value.length < 8) {
            passwordError.style.display = "block";
        } else {
            passwordError.style.display = "none";
        }
    }

    // Add event listeners for real-time validation
    nameInput.addEventListener("input", validateName);
    emailInput.addEventListener("input", validateEmail);
    passwordInput.addEventListener("input", validatePassword);

    // Blur event to validate fields when they lose focus
    nameInput.addEventListener("blur", validateName);
    emailInput.addEventListener("blur", validateEmail);
    passwordInput.addEventListener("blur", validatePassword);

    // Prevent form submission if any field is invalid
    form.addEventListener("submit", function (event) {
        validateName();
        validateEmail();
        validatePassword();

        if (nameError.style.display === "block" || emailError.style.display === "block" || passwordError.style.display === "block") {
            event.preventDefault(); // Prevent form submission if there are validation errors
        }
    });
});
