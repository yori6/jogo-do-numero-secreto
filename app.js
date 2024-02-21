let listaSorteio = []
let numeroMaximo = 10;
let numeroSecreto  = gerarNumeroAleatorio() ;
let tentativas = 1 

function textoNaTela(tag, texto){
    let campo = document.querySelector(tag)
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );
}
function mensagemInicial(){
textoNaTela('h1', 'bem vindo ao jogo do numero secreto')
textoNaTela('p', 'escolha um numero de 1 a 10')
}

mensagemInicial()

function vChute() {

    let chute = document.querySelector('input').value;

      if (chute == numeroSecreto){
        textoNaTela ('h1', 'acertou! :)')
        let palavraTentativa = tentativas > 1 ? 'tentativas': 'tentativa';

        let mensagemTentativas =`voce descobiuo numero sereto com ${tentativas} ${palavraTentativa}, parabens !!`;

        textoNaTela ('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled')
      } else {
        if (chute > numeroSecreto){
            textoNaTela('p', 'o numero é menor')
        }else {
            textoNaTela('p', 'o numero é maior')
        }tentativas++
        limparCampo()
      }
      
}

 function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1);
    let quantidadeDeNumerosNaLista = listaSorteio.length;

  if (quantidadeDeNumerosNaLista == numeroMaximo){
    listaSorteio= [];
  }

    if (listaSorteio.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaSorteio.push(numeroEscolhido)
        console.log(listaSorteio)
        return numeroEscolhido;
    }
}   

function limparCampo(){
    chute = document.querySelector('input')
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas =1
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}