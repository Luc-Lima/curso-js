function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('pictures')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'morning-picture.jpg'
        window.document.body.style.background='#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        //boa tarde
        window.document.body.style.background ='#b9846f'
        img.src = 'after-picture.jpg'
    } else {
        //boa noite
        window.document.body.style.background = '#515154'
        img.src = 'night-picture.jpg'
    }
}
