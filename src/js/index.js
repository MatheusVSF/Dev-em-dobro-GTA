/*
Objetivo 1 - quando o usuário clicar no botão de seleção de plataformas deve abrir uma caixa com os botões de seleção de plataforma
    Passo 1 - pegar o botão de seleção de plataformas no JS pra poder verificar quando o usuário clicar em cima dele

    Passo 2 - pegar o elemento do conteudo que precisa ser mostrado

    Passo 3 - pegar o clique do usuario no js

    Passo 4 - quando o usuário clicar, adicionar a classe ativo na listagem de plataformas dentro do botão pra que o conteúdo apareça


Objetivo 2 - caso a lista de botões de plataformas já esteja aparecendo e o usuário clicar em cima do botão, o conteúdo deve ser escondido

    Passo 1 - verificar se o botão já esta aberto, se sim, devemos remover a classe ativo pra que ele esconda o conteúdo novamente
*/
//OB1

// P1
const botao = document.querySelector(".btn-plataforma");

// P2
const elementoPlataforma = document.querySelector(".btn-plataforma .plataformas");

// P3
botao.addEventListener("click", () => {
    

    //OB2

    //P1
    //const botaoEstaAberto = elementoPlataforma.classList.contains("ativo")
    elementoPlataforma.classList.toggle("ativo")
    /*if(botaoEstaAberto) {
        elementoPlataforma.classList.remove("ativo")
    } else {
        // P4
        elementoPlataforma.classList.add("ativo")
        
    }*/
})