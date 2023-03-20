var num = window.document.getElementById('num')

var lista = window.document.getElementById('flista')
var res = window.document.getElementById('res')

var valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }

}
function clicar(){
   if(isNumero(num.value) && !inLista(num.value, valores)){
    /*se o valor adicionado  for um número e se não estiver na lista*/
    valores.push(Number(num.value))
    var item = document.createElement('option')
    item.text = `Valor ${num.value} adicionado`
    lista.appendChild(item)
    res.innerHTML = ''

   } else{
    window.alert('Valor inválido ou já encontrado na lista')
   }
   num.value = '' /* para limpar o número do botão adicionar*/
   num.focus() /* para o cursor piscar no local de adicionar*/
}

function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar')
    }else{
        var tot = valores.length
        var maior = valores[0] /*como o primeiro número não tem outra para ser comparado, ele é considerado o maior e o menor. */
        var menor = valores[0]
        var soma = 0
        var media = 0

        for(var pos in valores){
            soma += valores [pos]
            if (valores[pos] > maior){
                maior = valores[pos]}
            if (valores[pos] < menor){
                menor = valores[pos]}
        }

        media = soma/tot

        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo temos ${tot} números cadastrados. </p>`
        res.innerHTML += `<p> O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p> O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p> Somando todos os valores temos ${soma}. </p>`
        res.innerHTML += `<p> A média dos valores é ${media}.</p>`
    }
}

