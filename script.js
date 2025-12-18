function login(){
  var email = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function(){
      window.location.href = "dashboard.html";
    })
    .catch(function(error){
      document.getElementById("msg").innerHTML = error.message;
    });
}