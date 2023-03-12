function calcular(){
    var num = window.document.getElementById('txtnum')
    var tab = window.document.getElementById('seltab')
    
    if(num.value.length == 0){
        window.alert ('Por favor, digite um número')
    }else{
        num = Number(num.value)
        var c = 1 /*variável que vai multiplicar com o número solicitado */ 
        tab.innerHTML = '' /* para zera o resultado e começar nova tabuada, quando inserir outro número*/ 

        while(c <= 10){
            var item = document.createElement('option')/* para aparecer todas as opções da tabuada*/ 
            item.text = `${num} x ${c} = ${num*c}`
            item.value = `tab${c}`/* serve para identificar cada linha do resultado. Pro JS não faz muita diferença, mas sfa pra outras linguagens*/
            tab.appendChild(item) /*para dar o resultado*/
            c++
        }
    }
   
    
}
       
       
 
   
