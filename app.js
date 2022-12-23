list_angka = [];
function tambahangka() {
  angka = Number(document.getElementById("angka").value)
  list_angka.push(angka)
  document.getElementById("hasil").innerHTML = "[" + list_angka + "]"
  final(angka)
  document.getElementById("jumlah").innerHTML = "[" + angka + "]"
  
}
function final (){
    angka=0
for (i=0;i<list_angka.length;i++) {
    angka=angka+list_angka[i]
}
}
function hanyaangka(evt) {
    var charCode = (evt.which) ? evt.which : Event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
  
      return false;
    return true;
  }
