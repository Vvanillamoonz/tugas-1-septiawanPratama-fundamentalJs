function penjumlahan(a, b) {
    return a + b;
  }
  
  function pengurangan(a, b) {
    return a - b;
  }
  
  function hitung(angka1, angka2, operasi) {
    const hasil = operasi(angka1, angka2);
    const namaOperasi = operasi.name;
    console.log(`Hasil dari ${namaOperasi} antara : ${angka1} dan ${angka2} adalah ${hasil}`);
  }
  
  hitung(5, 3, penjumlahan);
  
  hitung(8, 2, pengurangan);
  