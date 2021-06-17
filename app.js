// Your web app's Firebase configuration
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD9CdAbqLRa98chQOtD8HTM8-GBRMphQlY",
  authDomain: "resume-dbba5.firebaseapp.com",
  projectId: "resume-dbba5",
  storageBucket: "resume-dbba5.appspot.com",
  messagingSenderId: "175167781783",
  appId: "1:175167781783:web:1545d6078e3e31833d22d2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Refernece contactInfo collections
let contactInfo = firebase.firestore();

// Listen for a submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //   Get input Values
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let message = document.querySelector(".message").value;
  console.log(name, email, message);

  saveContactInfo(name, email, message);
  

  document.querySelector(".contact-form").reset();
  sendEmail(name,email,message);
}

// Save infos to Firebase
function saveContactInfo(name, email, message) {
  contactInfo.collection("users").add({
    name:name,
    email:email,
    message:message,
  });}

//   newContactInfo.set({
//     name: name,
//     email: email,
//     message: message,
//   });
// }
// // let db = firebase.firestore()
// // db.collection("users").add({
// //     first: "Ada",
// //     last: "Lovelace",
// //     born: 1815
// // })
// // .then(function(docRef) {
// //     console.log("Document written with ID: ", docRef.id);
// // })
// // .catch(function(error) {
// //     console.error("Error adding document: ", error);
// // });
function sendEmail(name,email,message){
  Email.send({
    Host:"smtp.gmail.com",
    Username:"patel.smit3131@gmail.com",
    Password:"kzbtfprrptxkwzes",
    To:`${email},patel.smit3131@gmail.com`,
    From:"patel.smit3131@gmail.com",
    Subject:`${name} Thanks for submiting Form`,
    Body:`${name} you submited message "${message}" sucessfully... from this mail id ${email}...we will contact in some time<br/><br/><br/><br/><br/><br/><br/><br/>Regards<br/>Patel Smit<br/>6351672051`
  }).then((message)=>alert("mail sent successfully"))
}