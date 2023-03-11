function contar(){
    var n1 = window.document.getElementById('txtini')
    var n2 = window.document.getElementById('txtfim')
    var pas = window.document.getElementById('txtpas') 
  
    var res = window.document.getElementById('res')
   
    if(n1.value.length == 0 || n2.value.length == 0 || pas.value.length == 0){
        window.alert('[ERRO] Faltam dados!')
        res.innerText = `Impossível contar`
    }else{
        n1 = Number(n1.value)
        n2 = Number(n2.value)
        pas = Number(pas.value)

        if(pas <= 0){
        window.alert(`Passo inválido!`)
            
        }

        if(n1< n2){
            //contagem crescente
            for(var c = n1; c <= n2; c += pas){
                res.innerHTML += ` ${c} \u{1F449}`
               }
        }else{
            //contagem regressiva
            for(var c = n1; c >= n2; c -= pas){
                res.innerHTML += ` ${c} \u{1F449}`
            }

        }
        
       res.innerHTML += `\u{1F3C1}`
    }
}