var firebaseConfig = {
    apiKey: "AIzaSyCuDaeNbXRs5tkWWxutRw19srM_MflXStg",
    authDomain: "chatwebapp-5d9d1.firebaseapp.com",
    projectId: "chatwebapp-5d9d1",
    storageBucket: "chatwebapp-5d9d1.appspot.com",
    messagingSenderId: "138274744842",
    appId: "1:138274744842:web:022207e06951980e374df3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function addRoom(){
  
}