function contar(){
    var n1 = window.document.getElementById('txtini')
    var n2 = window.document.getElementById('txtfim')
    var pas = window.document.getElementById('txtpas')

    n1 = Number(n1.value)
    n2 = Number(n2.value)
    pas = Number(pas.value)

    var res = window.document.getElementById('res')

       for(var c = n1; c <= n2; c += pas){
        res.innerHTML += `${c}`
       }
       
}