/*
    Sistema para adicionarLivr(), mostrarNaTela(), excluirCadastro(), SalvarnoLocal Store onload

    Validar os campos, Titulo, Autor, Ano maior que 0

    Add btn Excluir

    const Livro = {titulo: titulo.value, autor: autor.value, ano: ano.value}

    
*/

// Teste Local Storage


document.getElementById('form').addEventListener('submit', function(e){
    e.preventDefault()
    const tituloErro = document.getElementById('tituloErro')
    const autorErro = document.getElementById('autorErro')
    const anoErro = document.getElementById('anoErro')

    tituloErro.innerText = ""
    autorErro.innerText = ""
    anoErro.innerText = ""

    const tituloInput = document.getElementById('titulo')
    const autorInput = document.getElementById('autor')
    const anoInput = document.getElementById('ano')

    if (tituloInput.value == "") {
        tituloErro.innerText = "Preencha o Titulo!"
        return false;
    }
    
    if (autorInput.value == "") {
        autorErro.innerText = "Preencha o nome do Autor!"
        return false;
    }
    
    if (anoInput.value == "" || anoInput < 0) {
        anoErro.innerText = "Preencha o Ano sem que seja menor que 0!"
        return false;
    }

    const livro = {
        titulo: tituloInput.value,
        autor: autorInput.value,
        ano: anoInput.value
    }

    const livros = localStorage.getItem('livros')
    const livrosArray = JSON.parse(livros)

    livrosArray.push(livro)

    localStorage.setItem('livros', JSON.stringify(livrosArray))

    mostrarNaTela()
})

window.onload = function(){ 
    const livros = localStorage.getItem("livros") 

    if(livros == null){
        localStorage.setItem("livros", JSON.stringify([ 
            {
                titulo: "Front-End",
                autor: "Luiz",
                ano: 2004
            }
        ]))
    }

    mostrarNaTela()
}

function mostrarNaTela() {
    const livros = localStorage.getItem("livros")

    const livrosArray = JSON.parse(livros)

    const tdbody = document.getElementById("livros")
    tdbody.innerHTML = ''

    livrosArray.forEach(function(livros) {
        const tr = document.createElement('tr')

        const td1 = document.createElement('td')
        td1.textContent = livros.titulo
        
        const td2 = document.createElement('td')
        td2.textContent = livros.autor
       
        const td3 = document.createElement('td')
        td3.textContent = livros.ano

        const td4 = document.createElement('td')
        const btnRemove = document.createElement('button')
        btnRemove.innerText = "Remover"
        btnRemove.addEventListener('click', function() {
            removerLivro(livros.titulo)
        })
        td4.appendChild(btnRemove)

        tr.append(td1)
        tr.append(td2)
        tr.append(td3)
        tr.append(td4)

        tdbody.append(tr)
    }) 
}

function removerLivro(titulo){
    const livros = localStorage.getItem('livros')
    const livrosArray = JSON.parse(livros)

    const novoLivro = livrosArray.filter(function(livros){
        return livros.titulo != titulo
    })

    localStorage.setItem('livros', JSON.stringify(novoLivro))

    mostrarNaTela()
}