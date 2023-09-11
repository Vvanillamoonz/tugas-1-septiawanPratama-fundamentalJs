function cekLogin (username, password){
    if (username == "admin" && password == 12345){
        console.log("Login berhasil");
    } else {
        console.log("Login gagal");
    }
}

let username = "admin";
let password = 12345;

return cekLogin(username, password);