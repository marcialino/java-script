let valores = [2, 4, 5, 7, 8, 9]
valores.sort()
console.log(valores)

for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

let pos = valores.indexOf(10)
if (pos == -1){
    console.log (`O valor não foi encontrado!`)
}else{
    console.log(`O valor está na posição ${pos}.`)
}

