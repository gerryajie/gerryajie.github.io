function hitung(pilihan)
{
    var bil1=document.getElementById('angka1').value;
    var bil2=document.getElementById('angka2').value;
    bil1 = parseInt(bil1)
    bil2 = parseInt(bil2)
    if (pilihan=='tambah'){
        document.getElementById('hasil').value = bil1 + bil2;
    }
    else if(pilihan == 'kurang'){
        document.getElementById('hasil').value = bil1 - bil2;
    }
    else if(pilihan == 'kali'){
        document.getElementById('hasil').value = bil1 * bil2;
    }
    else {
        document.getElementById('hasil').value = bil1 / bil2;
    }
    document.getElementById('hasil').style.backgroundColor="#CCC";
}