const PRIMEIRA_ETAPA = document.querySelector('.caixa1'),
      SEGUNDA_ETAPA = document.querySelector('.caixa2'),
      TERCEIRA_ETAPA = document.querySelector('.caixa3'),
      CONTEUDO_SOME = document.querySelector('.conteudo'),
      CONTEUDO = document.getElementById('conteudo'),
      CONTEUDO_DOIS = document.querySelector('.conteudo2')
     
let  controleEtapa = 1

function mostrarConteudo() {
    CONTEUDO.innerHTML = `
        <h1 class="titulo"><p>Preencha suas informações</p></h1>

        <form action="" class="formulario-info">
            
            <div class="form-nome">
                <label for="nome">Nome completo</label>
                <input type="text" name="nome" id="nome" >
            </div>
            <div class="form-idade">
                <label for="ano-de-nascimento">Data de nascimento</label>
                <input placeholder=" Apenas os números" type="number" name="ano-de-nascimento" id="ano-de-nascimento"  maxlength="11" >
            </div>
            <div class="form-cartao">
                <label for="cartao">Número do cartão</label>
                <input  placeholder=" Apenas os números" type="text" name="cartao" id="cartao" >
            </div>
            <div class="form-cpf">
                <label for="cartao">Número do cpf</label>
                <input  placeholder=" Apenas os números" type="number" name="cartao" id="cpf" maxlength="11" >
            </div>

                <input type="button" class="btn-avancar" onclick="proximaEtapa()" value="Avançar">
        </form>
    `
}

function proximaEtapa() {
    if (controleEtapa == 1) {
        PRIMEIRA_ETAPA.classList.remove('ativado')
        SEGUNDA_ETAPA.classList.add('ativado')
        controleEtapa++
        conteudoUmSome()
    } else {
        SEGUNDA_ETAPA.classList.remove('ativado')
        TERCEIRA_ETAPA.classList.add('ativado')
    }    
}

function conteudoUmSome() {
    CONTEUDO_SOME.classList.add('conteudo-some')

    setInterval(deletaConteudoUm, 300)
}

function deletaConteudoUm() {  
    CONTEUDO.innerHTML = ""
    CONTEUDO_SOME.classList.remove('conteudo-some')
    adicionaConteudoDois()
}

function adicionaConteudoDois() {
    CONTEUDO_DOIS.innerHTML = `
    <div class="confirmacao">
        <h2>É esse o produto que você quer adquir?</h2>
        <p>Kombi veia edição deluxe, por apenas R$ 500.000.000.000,00</p>
    </div>
        
    <div class="produto">
        <img src="http://3.bp.blogspot.com/-q8pecxxA2yo/UEYV-bHdCTI/AAAAAAAADH8/iUsA9eVpukM/s1600/Kombi_Luxo+1970.JPG">
        <div class="botoes-produto">
            <input type="button" class="btn-cancelar" value="Cancelar"></input>
            <input type="button" class="btn-comprar" value="Comprar"></input>
            <input type="button" class="btn-voltar" value="Voltar"></input>
        </div>
    </div>
    `
    setInterval( CONTEUDO_DOIS.classList.add('conteudo-direita-para-esquerda'), 200)
}

mostrarConteudo()