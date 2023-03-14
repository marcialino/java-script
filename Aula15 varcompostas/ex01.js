let valores = [2,4,7,8,1,5]
valores.sort()

console.log(valores)
console.log(`O nosso vetor tem os valores ${valores}`)

for(let pos=0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}