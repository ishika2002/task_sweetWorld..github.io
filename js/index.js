function validate(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;

    if(username!="admin" || password!="admin"){
        alert("Incorrect username or password");
        return false;
    }
}