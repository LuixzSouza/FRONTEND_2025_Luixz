window.onload = function(){ // Função para salvar no local Storage // Função para testar
    const animais = localStorage.getItem("animais") // Pegando do id do tbody

    if(animais == null){ // Se animais estiver vazio
        localStorage.setItem("animais", JSON.stringify([ // Armazena e tranforma em String
            {
                nome: "Crocodilo",
                patas: 4,
                pais: "Egito"
            }
        ]))
    }

    montarListaDeAnimais()
}

document.getElementById("form").addEventListener("submit", function(event){ // Click no botão dentro do furmulario com tyoe submit
    event.preventDefault() // Previne que o usuario não prossiga se não preencher
    const nomeErro = document.getElementById("nomeErro") // Pega os span com id de Erro
    const patasErro = document.getElementById("patasErro") // Pega os span com id de Erro
    const paisErro = document.getElementById("paisErro") // Pega os span com id de Erro
 
    nomeErro.innerText = "" // Insere vazio dentoro
    patasErro.innerText = "" // Insere vazio dentoro
    paisErro.innerText = "" // Insere vazio dentoro

    const nomeInput = document.getElementById("nome") // Pega o Input do nome
    const patasInput = document.getElementById("patas") // Pega o Input de patas
    const paisInput = document.getElementById("pais") // Pega o Input de pais

    if(nomeInput.value == ""){ // Verifica se o valor do Input é igual a nada caso seja entra dentro
        
        nomeErro.innerText = "Nome é obrigatório" // Insere no Span essa mensagem de erro
        return false // Para sair
    }

    if(patasInput.value == "" || patasInput.value < 0){ // Verifica se pata está vazia e se o valor é menor que 0 caso seja
        
        patasErro.innerText = "Quantidade de patas é obrigatório e deve ser maior ou igual a zero!" // Insere essa mensagem no Span patasErro
        return false // Finaliza
    }

    if(paisInput.value == ""){ // Verifica se o valor de pais está vazio caso esteja entra e...
        
        paisErro.innerText = "País é obrigatório!" // Adiciona no span 
        return false // Fecha
    }

    const animal = { // Cria um Array com esses nomes e Insere os valores dentro
        nome: nomeInput.value,
        patas: patasInput.value,
        pais: paisInput.value
    }

    const animais = localStorage.getItem("animais") // Pega o valor no local Store e Insere na variavel animais
    const animaisArray = JSON.parse(animais) // parse converte os dados em objetos e adiciona na variavel animaArray

    animaisArray.push(animal) // Não sei oque faz mas acho que insere a variavel que é um array dentro

    localStorage.setItem("animais", JSON.stringify(animaisArray)) //  Acho que adiciona dentro do local store com chave id animais e no Json tranforma em string

    montarListaDeAnimais()
})

function montarListaDeAnimais(){
    const animais = localStorage.getItem("animais") // Pega no local store os animais e armazena em animais

    const animaisArray = JSON.parse(animais) // tranforma em objeto e armazena no animaisArray

    const tbody = document.getElementById("animais") // Aqui sim seleciona no html animais e armazena em tbody
    tbody.innerHTML = "" // faz ficar vazio confima

    animaisArray.forEach(function(animal){ // na vaiavel animaisArray que são os objetos pegado no Json faz um forEach para passa entre tods eles fazendo em item por item

        const tr = document.createElement("tr") // cria um tr

        const td1 = document.createElement("td") // Cria o HTML td e armazena em td1
        td1.innerText = animal.nome // td1 Recebe o texto do nome do animal

        const td2 = document.createElement("td")
        td2.innerText = animal.patas

        const td3 = document.createElement("td")
        td3.innerText = animal.pais

        const td4 = document.createElement("td") // Cria uma tabela para poder armazena o botão para excluir
        const botao = document.createElement("button")  // Cria o element HTML botão
        botao.innerText = "Excluir" // Insere esse texto dentro do Botão
        botao.addEventListener("click", function(){ // Faz um evento de click para ou botão
            excluirAnimal(animal.nome) // quando clicado chama a funÇào para exluir o animal passando um parametro dentro desejado
        })
        td4.append(botao) // conect o td4 com o botao 
        // os mesmo aqui mas para cada con
        tr.append(td1)  // Conecta o tr com o td1 para receber
        tr.append(td2)
        tr.append(td3)
        tr.append(td4)

        
        tbody.append(tr) // nossa variavel tdbody criada no HTML com a criada aqui no js
    })
}

function excluirAnimal(nome){ // Função para excluir com parametro doque deseja
    const animais = localStorage.getItem("animais") // pega a chave no local store com nome animais e armazena na varivel animais
    const animaisArray = JSON.parse(animais) // Tranforma animais em Objeto e animais aimaisArray recebe

    const novoAnimais = animaisArray.filter(function(animal){ // não sei exatamente mas dentro de animais faz um parametro filtrando e novoAniomais receve
        return animal.nome != nome // aqui não entendi muito ele pega o parametro nome e se for diferente de nome faz algo oque eu não entendi
    })

    localStorage.setItem("animais", JSON.stringify(novoAnimais)) //adciona dentro do LocalStore na chave animais tranformando em tring e inseindo o novo valor criado

    montarListaDeAnimais() // Monta a lista onde tem localStore e o HTML com js
}