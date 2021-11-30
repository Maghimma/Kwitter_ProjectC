var firebaseConfig = {
  apiKey: "AIzaSyClAozaZW0DEsqaldXTsXdE0nqiyYDALIY",
  authDomain: "kwitter-project-1224.firebaseapp.com",
  databaseURL: "https://kwitter-project-1224-default-rtdb.firebaseio.com",
  projectId: "kwitter-project-1224",
  storageBucket: "kwitter-project-1224.appspot.com",
  messagingSenderId: "88768586641",
  appId: "1:88768586641:web:89002c559dc09ec57db030"
};
firebase.initializeApp(firebaseConfig);

function addRoom() {
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
     purpose : "adding room name"
  });

  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id="+ Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
    document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name" , name);
  window.location = "chatpage.html";
}