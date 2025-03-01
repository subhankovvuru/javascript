import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBP8rh3-xzyV4KNJI0nzgV6hQyeSmlm_XA",
  authDomain: "brickgame-6f731.firebaseapp.com",
  projectId: "brickgame-6f731",
  storageBucket: "brickgame-6f731.firebasestorage.app",
  messagingSenderId: "975947901850",
  appId: "1:975947901850:web:04ce2071db6693b52e6823"
};

const app = initializeApp(firebaseConfig);
const authentication = getAuth(app);

let signup = document.getElementById("signupForm");
signup.addEventListener("submit", async (x) => {
  x.preventDefault();
  let namevalue = document.getElementById("Name").value.trim();
  let emailvalue = document.getElementById("Email").value.trim();
  let passwordvalue = document.getElementById("Password").value.trim();
  let confirmPasswordvalue = document.getElementById("ConfirmPassword").value.trim();

  const emailPattern = /^[a-z0-9]+@[a-z]+\.[a-z]{2,}$/;
  const pswdPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$]).{8,13}$/;

  let isValid = true;

  // Name validation
  if (namevalue === '') {
    document.getElementById("nameerror").textContent = 'Name is required';
    isValid = false;
  } else if (namevalue.length < 3) {
    document.getElementById("nameerror").textContent = 'Name must be more than three characters';
    isValid = false;
  } else {
    document.getElementById("nameerror").textContent = '';
  }

  // Email validation
  if (emailvalue === '') {
    document.getElementById("emailerror").textContent = 'Email is required';
    isValid = false;
  } else if (!emailPattern.test(emailvalue)) {
    document.getElementById("emailerror").textContent = 'Enter a valid email';
    isValid = false;
  } else {
    document.getElementById("emailerror").textContent = '';
  }

  // Password validation
  if (passwordvalue === '') {
    document.getElementById("pswderror").textContent = 'Password is required';
    isValid = false;
  } else if (!pswdPattern.test(passwordvalue)) {
    document.getElementById("pswderror").textContent = 'Password must be between 8 and 13 characters, and contain at least one uppercase letter, one lowercase letter, and one special character (@, #, or $)';
    isValid = false;
  } else {
    document.getElementById("pswderror").textContent = '';
  }

  // Confirm Password validation
  if (confirmPasswordvalue !== passwordvalue) {
    document.getElementById('cpswderror').textContent = 'Passwords do not match';
    isValid = false;
  } else {
    document.getElementById('cpswderror').textContent = '';
  }

  // If form is valid, attempt to sign up the user
  if (isValid) {
    document.getElementById("Name").value = "";
    document.getElementById("Email").value = "";
    document.getElementById("Password").value = "";
    document.getElementById("ConfirmPassword").value = "";

    try {
      // Firebase authentication to create user
      await createUserWithEmailAndPassword(authentication, emailvalue, passwordvalue);
      console.log("User created successfully");
    } catch (error) {
      console.log("Error creating user:", error.message);
    }
  }
});
