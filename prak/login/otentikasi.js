function login(){
    let email = document.forms["form"]["email"].value;
    let password = document.forms["form"]["password"].value;

    if( email == "salma@gmail.com" && password == "123"){
        alert ("Login sukses!");
        return true;
      }
      else if(email =="" || password ==""){
        alert("Masukan Email dan password Anda");
        return false;
      }
      else{
        alert("Email atau password yang Anda masukan SALAH");
        return false;
      }
}
