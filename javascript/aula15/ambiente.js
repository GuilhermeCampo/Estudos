let num = [8, 2, 7, 1, 9]
num.sort()



// for (let pos = 0; pos <= num.length; pos++){
//     console.log(num[pos])
// }

for (let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}


// num.length   -> tamanho da array, quantidade de elementos
//num.sort() -> ordenação em ordem crescente