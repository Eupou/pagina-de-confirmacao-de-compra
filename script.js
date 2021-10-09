const PRIMEIRA_ETAPA = document.querySelector('.caixa1'),
      SEGUNDA_ETAPA = document.querySelector('.caixa2'),
      TERCEIRA_ETAPA = document.querySelector('.caixa3')
     
let  controleEtapa = 1

function proximaEtapa() {
    if (controleEtapa == 1) {
        PRIMEIRA_ETAPA.classList.remove('ativado')
        SEGUNDA_ETAPA.classList.add('ativado')
        controleEtapa++
    } else {
        SEGUNDA_ETAPA.classList.remove('ativado')
        TERCEIRA_ETAPA.classList.add('ativado')
    }    
}


