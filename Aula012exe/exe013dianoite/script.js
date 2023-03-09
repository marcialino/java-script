
function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12){
        //bom dia
        img.src = 'diaweb.png'
        document.body.style.background = '#cdc199'
    }else if (hora >=12 && hora <=18){
        img.src = 'tardeweb.png'
        document.body.style.background = '#d59977'
        //Boa tarde
    }else{
        img.src = 'noiteweb1.png'
        document.body.style.background ='#273234'
        //boa noite
    }

}