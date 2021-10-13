function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var outcome = document.getElementById('outcome')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Erro! Por favor verifique novamente os dados!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            gênero = 'Masculino'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'baby-boy.jpg')
            } else if (idade < 21){
                //joem
                img.setAttribute('src', 'young-man.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adult-man.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'elderly-man.jpg')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if ( idade >= 0 && idade < 10) {
                //criança
            } else if (idade < 21){
                //jovem
            } else if ( idade < 50) {
                //adulto
            } else {
                //idoso
            }
        }
        outcome.style.textAlign = 'center'
        outcome.innerHTML = `Detectamos o gênero ${gênero} com idade de ${idade} anos`
        outcome.appendChild(img)
    }
}   
