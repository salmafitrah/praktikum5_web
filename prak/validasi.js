function validasi(){
    let nama = document.getElementById("nama").value;
    let email = document.getElementById("email").value;
    let time = document.getElementById("time").value;
    let destinasi = document.getElementById("destinasi").value;
    let ticket = document.getElementById("ticket").value;

    if (nama =="" || email == "" || time == "" || destinasi == "" || ticket ==""){
        alert ("Data must be filled out !");
        return false;
}
}