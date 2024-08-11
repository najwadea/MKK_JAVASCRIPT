function validasi() {
    var nama = document.forms["formku"]["nama"].value;
    var bil1 = document.forms["formku"]["bil1"].value;
    var email = document.forms["formku"]["email"].value;
    var ekspresi = /^([A-Za-z0-9_\-\.])+@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

     // Validasi nama
     if (!/^[a-zA-Z]+$/.test(nama)) {
        alert("Data yang diinputkan untuk nama harus berupa huruf");
        document.getElementById("nama").focus();
        document.forms["formku"]["nama"].value = "";
        return false;
    }

     // Validasi telepon
     if (!/^[0-9]+$/.test(bil1)) {
        alert("Data yang diinputkan untuk nomor telepon harus berupa angka");
        document.getElementById("bil1").focus();
        document.forms["formku"]["bil1"].value = "";
        return false;
    }

      // Validasi Email
      if (email == "" || !ekspresi.test(email)) {
        alert("Email anda belum benar");
        document.getElementById("email").focus();
        return false;
    } else {
        alert("Pendaftaran berhasil");
    }

    return true;
}



