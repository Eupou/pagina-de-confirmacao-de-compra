const PRIMEIRA_ETAPA = document.querySelector('.caixa1'),
      SEGUNDA_ETAPA = document.querySelector('.caixa2'),
      TERCEIRA_ETAPA = document.querySelector('.caixa3'),
      CONTEUDO_SOME = document.querySelector('.conteudo'),
      CONTEUDO = document.getElementById('conteudo'),
      CONTEUDO_DOIS = document.querySelector('.conteudo2')
     
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

                <input type="button" class="btn-avancar" onclick="proximaEtapa(local = 0)" value="Avançar">
        </form>
    `
}

function proximaEtapa(local) {
    if (local == 0) {
        PRIMEIRA_ETAPA.classList.remove('ativado')
        SEGUNDA_ETAPA.classList.add('ativado')
        CONTEUDO_DOIS.classList.remove('conteudo-esquerda-para-direita')
        conteudoUmSome()
    } 
    
    if (local == 1) {
        SEGUNDA_ETAPA.classList.remove('ativado')
        TERCEIRA_ETAPA.classList.add('ativado')
        deletaConteudoDois()
    }
}

function voltarEtapa() {
    PRIMEIRA_ETAPA.classList.add('ativado')
    SEGUNDA_ETAPA.classList.remove('ativado')
    CONTEUDO_DOIS.classList.add('conteudo-esquerda-para-direita')
    CONTEUDO_SOME.classList.remove('conteudo-some')
}

function conteudoUmSome() {
    CONTEUDO_SOME.classList.add('conteudo-some')

    setInterval(deletaConteudoUm, 300)
}

function deletaConteudoUm() {  
    adicionaConteudoDois()
}

function adicionaConteudoDois() {
    CONTEUDO_DOIS.innerHTML = `
    <div class="confirmacao">
        <h2>É esse o produto que você quer adquirir?</h2>
        <p>Kombi veia edição deluxe, por apenas R$ 500.000.000.000,00</p>
    </div>
        
    <div class="produto">
        <img src="http://3.bp.blogspot.com/-q8pecxxA2yo/UEYV-bHdCTI/AAAAAAAADH8/iUsA9eVpukM/s1600/Kombi_Luxo+1970.JPG">
        <div class="botoes-produto">
            <input type="button" class="btn-cancelar"  onclick="proximaEtapa(local = 1)" value="Cancelar">
            <input type="button" class="btn-comprar" onclick="proximaEtapa(local = 1)" value="Comprar">
            <input type="button" class="btn-voltar" onclick="voltarEtapa()" value="Voltar">
        </div>
    </div>
    `
    setInterval( CONTEUDO_DOIS.classList.add('conteudo-direita-para-esquerda'), 200)
}

function deletaConteudoDois() {
    CONTEUDO_DOIS.classList.add('conteudo-some')
}

mostrarConteudo()