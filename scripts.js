function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora sao ${hora} horas.`
    
    if (hora >= 5 && hora < 12) {
        img.src = 'imagens/imgmanha.png'
        document.body.style.background = '#e5d77c'
    } else if (hora > 12 && hora <= 18) {
        img.src = 'imagens/imgtarde.png'
        document.body.style.background = '#c3755b'
    } else {
        img.src = 'imagens/imgnoite.png'
        document.body.style.background = '#0c0e17fb'
    }
    
}