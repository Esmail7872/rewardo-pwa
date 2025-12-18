function login(){
  var u = document.getElementById("username").value;
  var p = document.getElementById("password").value;

  if(u === "admin" && p === "1234"){
    window.location.href = "./dashboard.html";
  }else{
    document.getElementById("msg").innerHTML = "Wrong Username or Password";
  }
}