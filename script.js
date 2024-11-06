document.addEventListener("DOMContentLoaded", () => {
    // Display message from URL if redirected
    const displayRedirectMessage = () => {
        const urlParams = new URLSearchParams(window.location.search);
        const message = urlParams.get('message');
        if (message) {
            const successMessage = document.getElementById("successMessage");
            if (successMessage) {
                successMessage.textContent = message;
                successMessage.style.color = "green";
            }
        }
    };
    displayRedirectMessage();

    // Login Form Handler
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const username = document.getElementById("username").value.trim();
            const password = document.getElementById("password").value.trim();

            if (validateLogin(username, password)) {
                console.log("Login successful");
                window.location.href = "page1.html"; // Redirect to page1 on success
            } else {
                alert("Incorrect username or password.");
            }
        });
    }

    // Validate Login against stored credentials
    const validateLogin = (username, password) => {
        const userCredentials = JSON.parse(localStorage.getItem("userCredentials"));
        
        // Check if userCredentials exist and validate against stored username and password
        if (userCredentials) {
            return userCredentials.username === username && userCredentials.password === password;
        }
        return false; // Return false if no credentials are found
    };

    // Create Account Form Handler
    const createAccountForm = document.getElementById("createAccountForm");
    if (createAccountForm) {
        createAccountForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const username = document.getElementById("username").value.trim();
            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value.trim();
            const confirmPassword = document.getElementById("confirm-password").value.trim();

            if (password === confirmPassword) {
                // Store user credentials in localStorage
                const userData = {
                    username: username,
                    email: email,
                    password: password
                };
                localStorage.setItem("userCredentials", JSON.stringify(userData));

                console.log("Account created for", username);
                window.location.href = `login.html?message=Account created successfully`;
            } else {
                document.getElementById("createAccountMessage").textContent = "Passwords do not match.";
                document.getElementById("createAccountMessage").style.color = "red";
            }
        });
    }

    // Forgot Password Form Handler
    const forgotPasswordForm = document.getElementById("forgotPasswordForm");
    const otpContainer = document.getElementById("otpContainer");
    if (forgotPasswordForm) {
        forgotPasswordForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const emailOrMobile = document.getElementById("email").value.trim();

            if (emailOrMobile) {
                console.log("Sending OTP to", emailOrMobile);
                document.getElementById("message").textContent = "OTP sent to your email or mobile.";
                otpContainer.style.display = "block";
            } else {
                alert("Please enter a valid email or mobile number.");
            }
        });
    }

    // OTP Verification Handler
    const verifyOtpButton = document.getElementById("verifyOtp");
    if (verifyOtpButton) {
        verifyOtpButton.addEventListener("click", () => {
            const otp = document.getElementById("otp").value.trim();

            if (otp === "1234") { // Placeholder for OTP verification
                document.getElementById("message").textContent = "OTP Verified. Proceed to reset password.";
                document.getElementById("message").style.color = "green";
            } else {
                document.getElementById("message").textContent = "Invalid OTP.";
                document.getElementById("message").style.color = "red";
            }
        });
    }

    // Add click handlers for social sign-in buttons (optional)
    window.signInWithGoogle = () => {
        alert("Google sign-in is not implemented.");
    };

    window.signInWithFacebook = () => {
        alert("Facebook sign-in is not implemented.");
    };
});
