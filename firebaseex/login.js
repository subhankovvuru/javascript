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


let login=document.getElementById("loginform");


login.addEventListener("submit",async (v)=>{
    v.preventDefault()
    let emailvalue = document.getElementById("email").value.trim();
    let passwordvalue = document.getElementById("password").value.trim()


// let S_Credentials=JSON.parse(localStorage.getItem("users"));

//     // console.log(S_Credentials);   
// const user=S_Credentials.find(x=>{
//     return x.email === emailvalue && x.password === passwordvalue
// })
// console.log(user);
if (user) {
            try{
                  await createUserWithEmailAndPassword(authentication,emailvalue,passwordvalue)
                  console.log("sucess");
                  
            }catch{
                console.log("wrong");
                
            }
    
}
//      console.log("User found:", user);
//      location.href="./../Nabar/home.html"
// } else {
//      console.log("Invalid email or password");
//     }

})