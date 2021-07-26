
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
      apiKey: "AIzaSyCSSBfGLo2ooPFW-SNtEQCVs_mnkayAFXU",
      authDomain: "web-app-93.firebaseapp.com",
      databaseURL: "https://web-app-93-default-rtdb.firebaseio.com",
      projectId: "web-app-93",
      storageBucket: "web-app-93.appspot.com",
      messagingSenderId: "56000011452",
      appId: "1:56000011452:web:ad46fffa73bfa45e6fc4b9"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
