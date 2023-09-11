function faktorial(n) {
    if (n === 0) {
      return 1;
    } else {
      return n * faktorial(n - 1);
    }
  }
  
  const n = 5;
  const hasil = faktorial(n);
  console.log(`Faktorial dari ${n} adalah ${hasil}`);