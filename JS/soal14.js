function hitungPangkat(basis, eksponen) {
  const hasilPangkat = basis ** eksponen;
  return hasilPangkat;
}

const basis = 4;
const eksponen = 5;
const hasil = hitungPangkat(basis, eksponen);

console.log(`Hasil dari perpangkatan antara basis dan eksponen adalah ${hasil}`);
