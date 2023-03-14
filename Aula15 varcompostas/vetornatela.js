let valores = [8, 1,7, 4, 2, 9 ]

valores.sort()
console.log(valores)
console.log(`O vetor ${valores} tem ${valores.length} posições.`)

for(let pos = 0; pos < valores.length; pos++){
    console.log (`A posição ${pos} tem o valor ${valores[pos]}`)
}