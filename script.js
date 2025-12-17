function login(){
  var u = document.getElementById("username").value;
  var p = document.getElementById("password").value;

  if(u=="admin" && p=="1234"){
    document.getElementById("msg").innerHTML = "Login Successful";
  }else{
    document.getElementById("msg").innerHTML = "Wrong Username or Password";
  }
}