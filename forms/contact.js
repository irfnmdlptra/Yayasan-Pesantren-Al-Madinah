document.getElementById("whatsapp-form").addEventListener("submit", function (event) {
  event.preventDefault();

  var name = this.elements["name"].value;
  var email = this.elements["email"].value;
  var telp = this.elements["subject"].value; // Perubahan: menggunakan "subject" sebagai nama input field untuk nomor telp
  var message = this.elements["message"].value;

  var phoneNumber = "6281234567890"; // Ganti dengan nomor WhatsApp yang dituju
  var url = "https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=Name: " + name + "%0AEmail: " + email + "%0ATelp: " + telp + "%0AMessage: " + message;

  window.open(url, "_blank");

  this.reset();
});
