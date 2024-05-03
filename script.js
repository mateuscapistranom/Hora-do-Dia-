function carregar() {
    var msg = window.document.getElementById('msg')
    var ing = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são exatamente uma ${hora} hora.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        ing.src = 'manhafoto.png'
        document.body.style.background= '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
            //BOA TARDE!
            ing.src = 'tardefoto.png'
            document.body.style.background= '#b9846f'
    } else {
        //BOA NOITE!
        ing.src = 'noitefoto.png'
        document.body.style.background= '#515154'
    }
}