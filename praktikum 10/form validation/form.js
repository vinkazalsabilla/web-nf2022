let nama = document.getElementById("nama")
let email = document.getElementById("email")
let jam = document.getElementById("jam")
let tujuan = document.getElementById("tujuan")
let jumlah = document.getElementById("jumlah")
let span = document.getElementsByTagName("span")

function proses() {


if (nama.value =="") {
    span[0].style.visibility = "visible"
}
if (email.value =="") {
    span[1].style.visibility = "visible"
}
if (jam.value =="") {
    span[2].style.visibility = "visible"
}
if (tujuan.value =="") {
    span[3].style.visibility = "visible"
}
if (jumlah.value =="") {
    span[4].style.visibility = "visible"
}


}