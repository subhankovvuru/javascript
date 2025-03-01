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
signup.addEventListener("submit", async (x)=>{
    x.preventDefault()
    let namevalue = document.getElementById("Name").value.trim();
    let emailvalue = document.getElementById("Email").value.trim();
    let passwordvalue = document.getElementById("Password").value.trim()
    let confirmPasswordvalue = document.getElementById("ConfirmPassword").value.trim()


    var Fullname = namevalue
    
    const emailpattr=/^[a-z0-9]+@[a-z]+.[a-z]{2,}$/;
    const pswdpattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$]).{8,13}$/;

    let isValid = true;

    if (namevalue === '') {
      document.getElementById("nameerror").textContent = 'Name is required';
      isValid = false;
    }else if(namevalue.length<3){
      document.getElementById("nameerror").textContent = 'Name is must be more than three characters';
      isValid = false;
    }else{
        document.getElementById("nameerror").textContent = ''; 
    }


    if (emailvalue === '') {
      document.getElementById("emailerror").textContent = 'Email is required';
      isValid = false;
    } else if (!emailpattr.test(emailvalue)) {
      document.getElementById("emailerror").textContent = 'enter a valid email';
      isValid = false;
    }else{
      document.getElementById("emailerror").textContent = '';
    }



    if (passwordvalue === '') {
      document.getElementById("pswderror").textContent = 'Password is required';
      isValid = false;
    } else if (!pswdpattern.test(passwordvalue)) {
      document.getElementById("pswderror").textContent = 'Password must be at least 6 characters long';
      isValid = false;
    }else{
        document.getElementById("pswderror").textContent = '';
      
      
    }


    if (confirmPasswordvalue!==passwordvalue) {
      document.getElementById('cpswderror').textContent = 'Passwords  match';
      isValid = false;
    }else if(confirmPasswordvalue.length<8){
      document.getElementById('cpswderror').textContent = 'Passwords do not  match';
      isValid = false;
    }else{
        document.getElementById('cpswderror').textContent = '';
      

    }



    if (isValid) {
      document.getElementById("Name").value=""
      document.getElementById("Email").value=""
      document.getElementById("Password").value=""
      document.getElementById("ConfirmPassword").value=""      // document.getElementById("Name").value=""

      try{
            await createUserWithEmailAndPassword(authentication,emailvalue,passwordvalue)
            console.log("sucess");
            
      }catch{
          console.log("wrong");
          
      }

      // const allUsers = JSON.parse(localStorage.getItem("users")) || [];
      //   allUsers.push({name:namevalue,email:emailvalue,password:passwordvalue,c_password:confirmPasswordvalue})

      //   localStorage.setItem("users",JSON.stringify(allUsers))
    }
  })



