let pais = 'Jamaica'

if (pais == 'Brasil') {
    console.log('Brasileiro')
}
else if (pais == 'Jamaica') {
    console.log('Bem vindo tras a braba')
} else {
    console.log('Fora daki')
}

let agora = new Date()
let diasem = agora.getDay()

switch (diasem) {
    case 0:
        console.log('Domingo')
        case 1:
        console.log('Segunda')
        break
        case 2:
        console.log('Terça')
        break
        case 3:
        console.log('Quarta')
        break
        case 4:
        console.log('Quinta')
        break
        case 5:
        console.log('Sexta')
        break
        case 6:
        console.log('Sabadom')
        break
}