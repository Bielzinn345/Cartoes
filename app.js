function criaCartao (categoria, pergunta, resposta) {

}
function criaCartao (categoria, pergunta, resposta) {
    console.log(categoria, pergunta, resposta)
}
function criaCartao(categoria, pergunta, resposta) {
    let container 
}
function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container')
}
function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container')
    let cartao = document.createElement('article')
}
function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'
}
cartao.innerHTML = `
<div class="cartao__conteudo">
<h3>Programação</h3>
<div class="cartao__conteudo__pergunta">
        <p>O que é JavaScript?</p>
</div>
<div class="cartao__conteudo__resposta">
        <p>O JavaScript é uma linguagem de programação</p>
</div>
</div>
`
container.appendChild(cartao)
let respostaEstaVisivel = false
function viraCartao(){
    respostaestaVisivel = !respostaEstaVisivel
}
function viraCartao() {
    respostaEstaVisivel = !respostaEstaVisivel
    cartao.classList.toggle('active', respostaEstaVisivel)
}
cartao.addEventListener('click', viraCartao)
