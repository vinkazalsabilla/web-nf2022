function login() {
    let uname = document.getElementById("username").value; 
    let pwd = document.getElementById("password").value;

    if (uname == "ahmad2017" && pwd == "integrity") {
        location.replace("sukses.html");
        alert ("Login Berhasil");
    } else {
        alert("Login gagal!");

    }

}