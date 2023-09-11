let tahunLahir = 2000;
const tahunSekarang = new Date().getFullYear();
const umur = tahunSekarang - tahunLahir;

console.log(`Tahun sekarang adalah : ${tahunSekarang}`);
console.log(`Tahun Lahir anda adalah : ${tahunLahir}`);
if (umur >= 17){
    console.log("Selamat, Anda sudah cukup umur");
} else {
    console.log("Maaf, anda belum cukup umur")
}