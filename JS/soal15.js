function cekBilangan (bilangan){
    if (bilangan % 2 == 0){
        console.log(`${bilangan} merupakan bilangan genap`)
    } else if (bilangan % 2 == 1){
        console.log(`${bilangan} merupakan bilangan ganjil`)
    }
}

let bilangan = 89;
return cekBilangan(bilangan);